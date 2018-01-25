<template>
  <div class="page grab-sing-page">
    <div class="header">
      <div class="left">
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
        <x-button mini type="primary">我要发单</x-button>
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

    <div class="container">
      <order-sea-content v-if="currentPanel=='orderSea'"></order-sea-content>
      <get-order-content v-if="currentPanel=='getOrder'"></get-order-content>
      <completed-order-content v-if="currentPanel=='completedOrder'"></completed-order-content>
    </div>

  </div>
</template>

<script>
  import {XHeader, Box, TransferDom, XButton, Tab, TabItem,} from 'vux'
  import OrderSeaContent from './GrabSinglePageComponent/OrderSeaContent'
  import GetOrderContent from './GrabSinglePageComponent/GetOrderContent'
  import CompletedOrderContent from './GrabSinglePageComponent/CompletedOrderContent'

  export default {
    directives: {
      TransferDom,
    },
    components: {
      XHeader, XButton, Box, Tab, TabItem, OrderSeaContent, GetOrderContent, CompletedOrderContent
    },
    data() {
      return {
        name: '李永波',
        phone: '1768***123',
        avatarUrl: '../assets/avatar.png',
        transitionName: '',
        showGrab: true,

        currentPanel: 'orderSea'
      }
    },
    methods: {
      toggleView() {
        this.showGrab = !this.showGrab
        console.log(12)
      },

      onItemClick(type) {
        this.currentPanel = type
      },
    }
  }
</script>

<style lang="less">
  @theme-color: #EF5A48;
  @basic-border-color: #D5D5D5;

  .header {
    padding: 10px;
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
</style>
