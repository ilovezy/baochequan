// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

import LoginPage from './pages/LoginPage' // 登陆
import GrabSinglePage from './pages/GrabSinglePage' // 抢单池
import ReleaseContent from './pages/GrabSinglePageComponent/ReleaseContent'
import UnReleaseContent from './pages/GrabSinglePageComponent/UnReleaseContent'
import AllContent from './pages/GrabSinglePageComponent/AllContent'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: LoginPage
},{
  path: "/grabSinglePage",
  component: GrabSinglePage,
  children: [
    {path: '', component: ReleaseContent},
    {path: '/unrelease', component: UnReleaseContent},
    {path: '/all', component: AllContent}
  ]
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
