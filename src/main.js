// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import _ from 'underscore';
import moment from 'moment';
import VueLazyload from 'vue-lazyload';
import * as filters from './core/filters';

import LoginPage from './pages/LoginPage' // 登陆
import GrabSinglePage from './pages/GrabSinglePage' // 抢单池

window._ = _
window.moment = moment;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.use(VueRouter)
Vue.use(VueLazyload);

const routes = [{
  path: '/',
  component: LoginPage
},{
  path: "/grabSinglePage",
  component: GrabSinglePage

}]

const router = new VueRouter({
  routes
})

// FastClick.attach(document.body)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
