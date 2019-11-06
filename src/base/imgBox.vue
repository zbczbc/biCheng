
<template>
  <div :style="setContainerStyle()" class="image-box" @click="onClick">
    <img v-if="url&&!isLoadFail" class="image" :src="url" @error="onError">
    <template v-else>
      <img  class="image" :src="imgURL" alt="">
    </template>
  </div>
</template>
<script type='text/ecmascript-6'>
import { isUndefined,isString } from "common/js/util";

const TYPE_MAP = {
	logo: 'logo.png',
}

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
			let str = TYPE_MAP[this.type] || this.type+'.png'
			return 'static/'+str
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
}
</style>
