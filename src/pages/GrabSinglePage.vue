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
      <tab-item selected @on-item-click="onItemClick('release')">已发货</tab-item>
      <tab-item @on-item-click="onItemClick('unrelease')">未发货</tab-item>
      <tab-item @on-item-click="onItemClick('all')">全部订单</tab-item>
    </tab>

    <tab v-else>
      <tab-item selected @on-item-click="onItemClick">已发货1</tab-item>
      <tab-item @on-item-click="onItemClick">未发货1</tab-item>
      <tab-item @on-item-click="onItemClick">全部订单1</tab-item>
    </tab>

    <div class="container">
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
  import {XHeader, Box, TransferDom, XButton, Tab, TabItem} from 'vux'

  export default {
    directives: {
      TransferDom,
    },
    components: {
      XHeader, XButton, Box, Tab, TabItem
    },
    data() {
      return {
        name: '李永波',
        phone: '1768***123',
        avatarUrl: '../assets/avatar.png',
        transitionName: '',
        showGrab: true
      }
    },
    watch: {
      '$route'(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth == fromDepth ? 'fade' : (toDepth < fromDepth ? 'slide-right' : 'slide-left')
      }
    },
    methods: {
      toggleView() {
        this.showGrab = !this.showGrab
        console.log(12)
      },

      onItemClick(type) {
        this.$router.push('/' + type)
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
