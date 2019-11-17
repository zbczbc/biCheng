import { isString, getWindowWidth, getWindowHeight} from "common/js/util";

const baseWidth = 1920;
const baseHeight = 1080;

export default {
  props: {
    w: {},
    h: {},
    lh:{},
    m: {},
    mw: {},
    mh: {},
    mr: {},
    ml: {},
    mb: {},
    p: {},
    pl: {},
    pr: {},
    pt: {},
    pb: {},
    l: {},
    r: {},
    b: {},
    bc: {},
    c: {},
    s: {},
    bd: {},
    br: {}
  },
  data() {
    return {};
  },
  methods: {
    onClick(ev) {
      this.$emit("onClick", ev);
    },
    onMouseleave(ev) {
      this.$emit("onMouseleave", ev);
    },
    onMouseover(ev) {
      this.$emit("onMouseover", ev);
    },
    setAttValue(value, type, font) {
      if (value) {
        if (
            isString(value) &&
            (value === "auto" || value.indexOf("%") !== -1 )
          ) {
            return value;
          }else{
            return `${value}px`;
          }
        
      } else {
        return `${0}`;
      }
    },
    setPaddingValue(value, type) {
      if (value) {
        return `${this.setAttValue(value, type)}`;
      } else {
        return `0`;
      }
    },
    getCurrentPx(value, type) {
      if (value) {
        let num = `${parseInt(value) / baseWidth * getWindowWidth()} `
        if(type == 'h') {
          num = `${parseInt(value) /  baseHeight * getWindowHeight()} `
        }
        //console.log(parseInt(value), baseWidth,  getWindowWidth())
        return num;
      } else {
        return `${0}`;
      }
    },
    setMarginValue(value, type) {
      if (value) {
        if (value === "auto") {
          return value;
        } else {
          return `${this.setAttValue(value, type)}`;
        }
      } else {
        return `0`;
      }
    },
    getMarginStyle() {
      let style = "",
        margin = this.m.split(" ");
      if(this.mw&&this.$device.isM) {
        margin = this.mw.split(" ");
      }
      console.log(this.mw, this.$device.isM, margin)
      switch (margin.length) {
          case 1:
            style += `margin-top: ${this.setMarginValue(margin[0], 'h')};`;
            break;

          case 2:
            style += `margin:${this.setMarginValue(
              margin[0],'h'
            )} ${this.setMarginValue(margin[1], 'w')};`;
            break;

          default:
            style += `margin: ${this.setMarginValue(
              margin[0], 'h'
            )} ${this.setMarginValue(margin[1])} ${this.setMarginValue(
              margin[2], 'h'
            )} ${this.setMarginValue(margin[3])};`;
            break;
        }
      return style;
    },
    getPaddingStyle() {
      let style = "",
        padding = this.p.split(" ");
        switch (padding.length) {
          case 1:
            style += `padding-top: ${this.setPaddingValue(padding[0], 'h')};`;
            break;

          case 2:
            style += `padding:${this.setPaddingValue( padding[0], 'h')} ${this.setPaddingValue(padding[1])};`;
            break;

          default:
            style += `padding: ${this.setPaddingValue(
              padding[0], 'h'
            )} ${this.setPaddingValue(padding[1])} ${this.setPaddingValue(
              padding[2], 'h'
            )} ${this.setPaddingValue(padding[3])};`;
            break;
        }
      return style;
    },
    getPaddingLeftStyle() {
      return `padding-left:${this.setAttValue(this.pl)};`;
    },
    getPaddingRightStyle() {
      return `padding-right:${this.setAttValue(this.pr)};`;
    },
    getMarginRightStyle() {
      return `margin-right:${this.setAttValue(this.mr)};`;
    },
    getMarginBottomStyle() {
      return `margin-bottom:${this.setAttValue(this.mb)};`;
    },
    getMarginLeftStyle() {
		return `margin-left:${this.setAttValue(this.ml)};`;
    },
    getPaddingBottomStyle() {
		return `padding-bottom:${this.setAttValue(this.pb)};`;
    },
    getWidthStyle() {
		if(/%/.test(this.w)) {
			return `width:${this.w};`;
		}else{
			return `width:${this.setAttValue(this.w)};`;
		}
    },
    getHeightStyle(type) {
		let lh = this.lh || this.h
		if(/%/.test(this.h)) {
			return `height:${this.h};`;
		}else{
			if(type == 'w') {
				return `height:${this.setAttValue(this.h)};line-height:${this.setAttValue(lh)};`
			}else{
				return `height:${this.setAttValue(this.h, 'h')};line-height:${this.setAttValue(lh, 'h')};`
			}
		}
    },
    getColor(value) {
		if(/rgb/.test(value)) {
			return value;
		}else{
			return `#${value}`;
		}
    },
    getBaseStyle() {
      let style = "";
      if (this.w) {
        style += this.getWidthStyle();
      }
      if (this.h) {
        style += this.getHeightStyle();
      }
      if (this.m) {
        style += this.getMarginStyle();
      }
      if (this.mr) {
        style += this.getMarginRightStyle();
      }
      if (this.ml) {
        style += this.getMarginLeftStyle();
      }
      if (this.mb) {
        style += this.getMarginBottomStyle();
      }
      if (this.p) {
        style += this.getPaddingStyle();
      }
      if (this.pl) {
        style += this.getPaddingLeftStyle();
      }
      if (this.pr) {
        style += this.getPaddingRightStyle();
      }
      if (this.pb) {
        style += this.getPaddingBottomStyle();
      }
      if (this.l) {
        style += `left: ${this.setAttValue(this.l)};`;
      }
      if (this.lh) {
        style += `line-height: ${this.setAttValue(this.lh, 'h')};`;
      }
      if (this.r) {
        style += `right: ${this.setAttValue(this.r)};`;
      }
      if (this.t) {
        style += `top: ${this.setAttValue(this.t, 'h')};`;
      }
      if (this.b) {
        style += `bottom: ${this.setAttValue(this.b, 'h')};`;
      }
      if (this.bc) {
        style += `background-color: ${this.getColor(this.bc)};`
      }
      if (this.c) {
        style += `color: #${this.c};`
      }

      if (this.s) {
        style += `font-size: ${this.setAttValue(this.s, 'w', 'font')};`;
      }
      if (this.br) {
        style += `border-radius: ${this.setAttValue(this.br, 'h')};overflow:hidden;`;
      }

      if (this.bd) {
        style += `border: 1px solid ${this.getColor(this.bd)};`
      }
      return style;
    }
  }
};
