
<template>
  <div :style="setContainerStyle()" class="image-box" @click="onClick">
    <img v-if="!isLoadFail" class="image" :src="imgURL" @error="onError">
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
			isLoadFail: false
		};
	},
	computed: {
		imgURL() {
			let str
			if(this.type) {
				str = 'static/'+this.type+'.png'
			}else{
				str = `/api/portal/getFileStream/${this.url}`
			}
			
			return str
		}
	},
	methods: {
		setContainerStyle() {
			let style = this.getBaseStyle();
			//REPconsole.log(style)
			if (isUndefined(this.h)) {
				style += `height:100%;`;
			}else {
				style += this.getHeightStyle('w')
			}
			if (isUndefined(this.w)) {
				style += `width:100%;`;
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
  min-width: 100%;
  min-height: 100%;
}
</style>
