import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
// vant ui框架
import './plugins/vant.js'
// 动态的移动端字体大小
import './config/rem'
// 瀑布加载
import waterfall from 'vue-waterfall2'
// 懒加载图片
import VueLazyload from 'vue-lazyload'

import loading from './components/loading'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 全局使用瀑布加载
Vue.use(waterfall)

Vue.use(VueLazyload, {
  loading: require('./images/placeholderImg/product-img-load.png')
})

Vue.component('loading', loading)
