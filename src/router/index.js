import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/LoginPage' // 登陆
import index from '@/pages/index' // 抢单池
import WalletPage from '@/pages/WalletPage' // 我的钱包
import MyCarsPage from '@/pages/UserCenter/MyCarsPage' // 我的车辆
import WithdrawPage from '@/pages/WithdrawPage' // 提现
import BidRecordPage from '@/pages/BidRecordPage' // 竞价记录
import ReleaseOrderPage from '@/pages/ReleaseOrderPage' // 发布订单
import CarRegisterPage from '@/pages/CarRegisterPage' // 发布订单
import DriverDetailPage from '@/pages/DriverDetailPage' // 司机详情

export default new Router({
  routes: [{
    path: '/',
    component: LoginPage
  },{
    path: "/index",
    component: index
  }, {
    path: '/walletPage',
    component: WalletPage
  }, {
    path: '/withdrawPage',
    component: WithdrawPage
  }, {
    path: '/myCarsPage',
    component: MyCarsPage
  }, {
    path: '/bidRecordPage',
    component: BidRecordPage
  }, {
    path: '/releaseOrderPage',
    component: ReleaseOrderPage
  }, {
    path: '/carRegisterPage',
    component: CarRegisterPage
  }, {
    path: '/driverDetailPage',
    component: DriverDetailPage
  }]
})
