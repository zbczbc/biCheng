
<template>
  <div :style="setContainerStyle()" class="image-box" @click="onClick">
    <img v-if="!isLoadFail" class="image" :src="imgURL" @error="onError" >
  </div>
</template>
<script type='text/ecmascript-6'>
import { isUndefined,isString } from "common/js/util";

/**
 * 两种形式：
 * 1. 传入type 取static里面的图片
 * 2. 传入url  取服务器的图片
 * */

export default {
	props: {
		isNeedDefault: {
			type: Boolean,
			default: false
		},
		bd: {  //边框
			type: String,
		},
		url: {
			type: String
		},
		br: {},
		type: {}
	},
	data() {
		return {
			isLoadFail: false,
		};
	},
	computed: {
		imgURL() {
			let str
			if(this.type) {
				str = 'static/'+this.type+'.png'
			}else if(this.url){
				str = this.$api.getImg(this.url)
			}
			return str
		}
	},
	methods: {
		setContainerStyle() {
			let style = this.getBaseStyle();
			//REPconsole.log(style)
			 if (isUndefined(this.w)) {
				style += `width:100%;`;
			}else{
				let w = this.w
				if ( this.$device.isM && this.mw ) {
					w = this.mw
				}

				style += `width:${this.setAttValue(w)};`;
			}
			if (this.h) {
				let w = this.h
				if ( this.$device.isM && this.mw ) {
					w = this.mh
				}

				style += `height:${this.setAttValue(w)};`;
			} else if (isUndefined(this.h)) {
				style += `height:100%;`;
			}

			if ("vertical-align" in this.$attrs) {
				style += `vertical-align: ${this.$attrs["vertical-align"]};`;
			}
			return style;
		},
		onError() {
			this.isLoadFail = true;
			console.log('这张图片加载失败了')
		}
	}
};
</script>
<style scoped >
.image {
  display: block;
  width: 100%;
  /* min-width: 100%;
  min-height: 100%; */
}
</style>
