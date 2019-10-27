
<template>
  <div :style="setContainerStyle()" class="image-box">
    <img v-if="ImageUrl&&!isLoadFail" class="image" :src="ImageUrl" @error="onError">
    <template v-else>
      <img  class="image" v-if="isNeedDefault" src="../assets/icones/default.png" alt="">
    </template>
  </div>
</template>
<script type='text/ecmascript-6'>
import { isUndefined,isString } from "common/js/util";

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
		br: {}
	},
	data() {
		return {
			isLoadFail: false
		};
	},
	computed: {
		ImageUrl() {
            let _url = this.url
			this.isLoadFail = false
            if(isIdNumber(_url)){
                _url = getPicture(_url)
            }
			return _url
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
  width: 100%;
  height: 100%;
}
</style>
