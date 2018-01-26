// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import _ from 'underscore';
import moment from 'moment';
import axios from 'axios';

import VueLazyload from 'vue-lazyload';

import * as filters from '@/core/filters';

import router from '@/router/index.js'
import './core/toolkit.js'

window._ = _;
window.moment = moment;
window.axios = axios;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.use(VueLazyload);
Vue.use(VueRouter)

// FastClick.attach(document.body)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
