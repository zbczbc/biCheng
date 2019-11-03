<template>
  <div class="img-icon" :style="getIconStyle()" @click="onClick">
    <i :class="[ 'icon', type || '' ]"></i>
  </div>
</template>
<script type='text/ecmascript-6'>
import { isUndefined } from "common/js/util";

export default {
  props: {
    type: {
      required: true
    },
    mw: {},
    mh: {}
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
        if ( this.$device.isM && this.mw ) {
          this.w = this.mw
          this.h = this.mh
        }
        
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

.img-icon {
  &.hover .icon{
    &.intro_1{
      iconUrl('intro_1_h.png');
    }
    &.intro_2{
      iconUrl('intro_2_h.png')
    }
    &.intro_3{
      iconUrl('intro_3_h.png')
    }
    &.intro_4{
      iconUrl('intro_4_h.png')
    }
    &.intro_5{
      iconUrl('intro_5_h.png')
    }
  }  
}

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
  &.video-icon1 {
      iconUrl('video-icon1.png')
  }
  &.video-icon2 {
      iconUrl('video-icon2.png')
  }
  &.video-icon3 {
      iconUrl('video-icon3.png')
  }
  &.video-icon4 {
      iconUrl('video-icon4.png')
  }
  &.address{
     iconUrl('address.png')
  }
  &.left-gray{
     iconUrl('left-gray.png')
  }
  &.right-gray{
     iconUrl('right-gray.png')
  }
  &.intro_1{
    iconUrl('intro_1.png');
  }
  &.intro_2{
     iconUrl('intro_2.png')
  }
  &.intro_3{
     iconUrl('intro_3.png')
  }
  &.intro_4{
     iconUrl('intro_4.png')
  }
  &.intro_5{
     iconUrl('intro_5.png')
  }
  &.fff_close{
     iconUrl('fff_close.png'); width: 20px; height: 20px;
  }
  &.case-left{
     iconUrl('case-left.png'); 
  }
  &.case-right{
     iconUrl('case-right.png'); 
  }
  &.contact-add{
     iconUrl('contact-add.png'); 
  }
  &.contact-tel{
     iconUrl('contact-tel.png'); 
  }
}


</style>
