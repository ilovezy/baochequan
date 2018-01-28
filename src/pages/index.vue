<template>
  <div class="page grab-singe-page" style="height: 100%">
    <drawer
      width="200px;"
      :show.sync="drawerVisibility"
      :show-mode="showModeValue"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#35495e', width: '200px'}">

      <!-- drawer content -->
      <div slot="drawer">
        <group title="Drawer demo(beta)" style="margin-top:20px;">
          <cell title="我的钱包" link="/walletPage" value="我的钱包" @click.native="drawerVisibility = false"></cell>
          <cell title="我的车辆" link="/myCarsPage" value="我的车辆" @click.native="drawerVisibility = false"></cell>
          <cell title="竞价记录" link="/bidRecordPage" value="竞价记录" @click.native="drawerVisibility = false"></cell>
          <cell title="我要发单" link="/releaseOrderPage" value="我要发单" @click.native="drawerVisibility = false"></cell>
          <cell title="车辆注册" link="/carRegisterPage" value="车辆注册" @click.native="drawerVisibility = false"></cell>
          <cell title="司机详情" link="/driverDetailPage" value="司机详情" @click.native="drawerVisibility = false"></cell>
        </group>
      </div>

      <view-box ref="viewBox">
        <div class="header">
          <div class="left" @click="openDrawer">
          <span class="avatar">
            <img src="../assets/avatar.png" alt="">
          </span>
            <span class="user-info">
            <span class="name">{{name}}</span>
            <span class="phone">{{phone}}</span>
          </span>
          </div>

          <div class="center">
            <a :class="showGrab ? 'active' : ''" @click="toggleView">抢单</a>
            <a :class="showGrab ? '' : 'active'" @click="toggleView">发单</a>
          </div>

          <div class="right">
            <x-button mini type="primary" @click.native="goReleaseOrderPages">我要发单</x-button>
          </div>
        </div>

        <tab v-if="showGrab">
          <tab-item selected @on-item-click="onItemClick('orderSea')">抢单池</tab-item>
          <tab-item @on-item-click="onItemClick('getOrder')">已抢订单</tab-item>
          <tab-item @on-item-click="onItemClick('completedOrder')">已完成</tab-item>
        </tab>

        <tab v-else>
          <tab-item selected @on-item-click="onItemClick">已发货1</tab-item>
          <tab-item @on-item-click="onItemClick">未发货1</tab-item>
          <tab-item @on-item-click="onItemClick">全部订单1</tab-item>
        </tab>

        <div class="content-container">
          <order-sea-content v-if="currentPanel=='orderSea'"></order-sea-content>
          <get-order-content v-if="currentPanel=='getOrder'"></get-order-content>
          <completed-order-content v-if="currentPanel=='completedOrder'"></completed-order-content>
        </div>

      </view-box>
    </drawer>


  </div>
</template>

<script>
  import {XHeader, Box, TransferDom, XButton, Tab, TabItem, Drawer, Group, Cell, ViewBox} from 'vux'
  import OrderSeaContent from './GrabSinglePageComponent/OrderSeaContent'
  import GetOrderContent from './GrabSinglePageComponent/GetOrderContent'
  import CompletedOrderContent from './GrabSinglePageComponent/CompletedOrderContent'

  export default {
    directives: {
      TransferDom,
    },
    components: {
      XHeader,
      XButton,
      Box,
      Tab,
      TabItem,
      OrderSeaContent,
      GetOrderContent,
      CompletedOrderContent,
      Drawer,
      Group,
      Cell,
      ViewBox
    },
    data() {
      return {
        name: '李永波',
        phone: '1768***123',
        avatarUrl: '../assets/avatar.png',
        transitionName: '',
        showGrab: true,

        currentPanel: 'orderSea',

        drawerVisibility: false,
        showModeValue: 'overlay', //  'overlay' or 'push'
        showPlacementValue: 'left' // 'left' or 'right'
      }
    },
    methods: {
      openDrawer() {
        this.drawerVisibility = true
      },
      toggleView() {
        this.showGrab = !this.showGrab
        console.log(12)
      },

      onItemClick(type) {
        this.currentPanel = type
      },

      goReleaseOrderPages() {
        this.$router.push('/releaseOrderPage')
      }
    }
  }
</script>

<style lang="less">
  @import '../style/basic.less';

  .grab-singe-page {
    .header {
      padding: 10px @basic-margin;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid @basic-border-color;

      .left {
        width: 30%;
        display: flex;
        align-items: center;

        .avatar {
          display: inline-block;
          width: 40px;
          height: 40px;
          border-radius: 40px;
          overflow: hidden;
          margin-right: 5px;
          img {
            width: 100%;
          }
        }

        .user-info {
          width: 80px;
          line-height: 20px;
          .name {
            font-size: 14px;
            color: #222;
          }
          .phone {
            font-size: 12px;
            color: #bbb;
          }
        }
      }

      .center {
        display: flex;
        flex-grow: 1;
        /*margin-left: 10px;*/
        margin-right: 10px;
        position: relative;
        top: 17px;
        a {
          width: 50%;
          height: 35px;
          line-height: 35px;
          text-align: center;
          box-sizing: border-box;

          &.active {
            border-left: 1px solid @basic-border-color;
            border-top: 1px solid @basic-border-color;
            border-right: 1px solid @basic-border-color;
            background: #fff;
          }

        }
      }
    }

    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
      will-change: transform;
      transition: all 500ms;
      height: 100%;
      top: 46px;
      position: absolute;
      backface-visibility: hidden;
      perspective: 1000;
    }
    .vux-pop-out-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    .vux-pop-out-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-enter {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-leave-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    .menu-title {
      color: #888;
    }
  }
</style>
