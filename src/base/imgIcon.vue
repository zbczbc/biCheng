<template>
  <div :style="getIconStyle()" @click="onClick">
    <i :class="[ 'icon', type || '' ]"></i>
  </div>
</template>
<script type='text/ecmascript-6'>
import { isUndefined } from "common/js/util";

export default {
  props: {
    type: {
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    getIconStyle() {
      let style = this.getBaseStyle();
      if (isUndefined(this.w)) {
        style += `width:100%;`;
      }else{
        style += `width:${this.setAttValue(this.w)};`;
      }
      if (this.h) {
        style += `height:${this.setAttValue(this.h)};`;
      } else if (isUndefined(this.h)) {
        style += `height:100%;`;
      }
     
      return style;
    }
  }
};
</script>
<style scoped lang='stylus'>


.icon {
  display: block;
  width: 100%;
  height: 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;


  &.logo {
      iconUrl('logo.png')
  }
  &.menu {
      iconUrl('menu.png')
  }
  &.mClose {
      iconUrl('mClose.png')
  }
  &.play {
      iconUrl('play.png')
  }
}


</style>
