// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import HelloWorld from './components/HelloWorld'
import Default from './components/HelloWroldComponent/Default'
import Foo from './components/HelloWroldComponent/Foo'
import Bar from './components/HelloWroldComponent/Bar'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/basic', component: HelloWorld,
  children: [
    {path: '/default', component: Default},
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar}
  ]
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
