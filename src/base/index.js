import ImgBox from "./imgBox.vue";
import ImgIcon from './imgIcon'
import ContentBr from './content-br'
import BreadNav from "../components/breadnav"
import Banner from "../components/banner"


const baseComponents = {
  install: function(Vue) {
    Vue.component("ImgBox", ImgBox);
    Vue.component("ImgIcon", ImgIcon);
    Vue.component("BreadNav", BreadNav);
    Vue.component("Banner", Banner);
    Vue.component("CB", ContentBr);
  }
};
export default baseComponents;
