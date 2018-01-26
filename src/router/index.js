import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/LoginPage' // 登陆
import GrabSinglePage from '@/pages/GrabSinglePage' // 抢单池

export default new Router({
  routes: [{
    path: '/',
    component: LoginPage
  },{
    path: "/grabSinglePage",
    component: GrabSinglePage
  }]
})
