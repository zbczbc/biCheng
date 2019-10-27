import ImgBox from "./imgBox.vue";
import ImgIcon from './imgIcon'
const baseComponents = {
  install: function(Vue) {
    Vue.component("ImgBox", ImgBox);
    Vue.component("ImgIcon", ImgIcon);
  }
};
export default baseComponents;
