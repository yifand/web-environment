import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './assets/base/taobao.css'

//个人函数库
import OwnLib from './ownLib/ownLib'
Vue.prototype.$ownLib = new OwnLib

//vue轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper /* { default global options } */)


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
