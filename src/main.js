// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'
import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({routes: [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/seller',
    name: 'seller',
    component: seller
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: ratings
  }
],
linkActiveClass: 'active'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
