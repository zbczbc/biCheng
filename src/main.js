import Vue from 'vue'
import App from './App.vue'

import router from "./router"

import base from 'common/mixins/base'
import baseComponent from "base/index"
import api from "@/api/api"
import 'swiper/dist/css/swiper.min.css'

import 'babel-polyfill'


Vue.config.productionTip = false
Vue.mixin(base)
Vue.use(baseComponent)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
