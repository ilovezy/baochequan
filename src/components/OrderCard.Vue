<template>

  <section class="card">
    <span class="ribbon">
      <span class="text">未完成</span>
    </span>

    <div class="header">
      <span class="avatar">
        <img src="../assets/avatar.png" alt="">
      </span>

      <div class="basic-info">
        <div class="top">
          <span class="name">{{cardInfo.name}}</span>
          <span class="badge">旅行社</span>
        </div>

        <div class="bottom">
          <span class="info">下单20次 服务50次</span>
          <span class="order-id">订单号：123113</span>
        </div>
      </div>
    </div>

    <div class="body">
      <span class="icon iconfont to-detail">&#xe697;</span>
      <div class="list-item">
        <span class="icon iconfont">&#xe68a;</span>
        <span class="title">用车座位</span>
        <span class="content">50座</span>
      </div>
      <div class="list-item">
        <span class="icon iconfont text-info">&#xe606;</span>
        <span class="title">用车座位</span>
        <span class="content text-danger">50座</span>
      </div>
      <div class="list-item">
        <span class="icon iconfont text-info">&#xe798;</span>
        <span class="title">用车</span>
        <span class="content">50座</span>
      </div>
      <div class="list-item">
        <span class="icon iconfont text-warning">&#xe630;</span>
        <span class="title">用车座</span>
        <span class="content">50座</span>
      </div>
    </div>

    <div class="footer">
      <div class="status">已有27人报价</div>
      <div>
        <x-button type="primary" mini>
          选择司机
        </x-button>
      </div>
    </div>
  </section>
</template>
<script>
  import {TransferDom, XButton} from 'vux'

  export default {
    directives: {
      TransferDom,
    },
    components: {
      XButton
    },
    props: {
      cardInfo: {}
    },
    data() {
      return {

      }
    },
    mounted() {
      console.log(this)
    },
    methods: {}
  }
</script>

<style lang="less">
  @theme-color: #EF5A48;
  @basic-border-color: #D5D5D5;
  @sub-text-color: #aaa;
  @basic-shadow-color: #aaa;

  .card {
    background: #fff;
    margin: 15px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0px 0px 4px @basic-shadow-color;
    position: relative;

    .ribbon {
      position: absolute;
      top: 0;
      right: 0;
      background: #ff272f;
      color: #fff;
      width: 60px;
      height: 40px;
      font-size: 12px;
      &.warning {
        background: #e28521;
      }
      .text {
        display: inline-block;
        position: absolute;
        top: 7px;
        right: 3px;
        transform: rotate(30deg);
        overflow: hidden;
      }
      &:after {
        content: '';
        position: absolute;
        top: 1px;
        left: -1px;
        border-bottom: 40px solid #fff;
        border-right: 60px solid transparent;
      }

    }

    .header {
      border-bottom: none;
      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 60px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }

      .basic-info {
        flex: 1;
        margin-left: 15px;
        border-bottom: 1px solid @basic-border-color;
        height: 60px;

        .top {
          margin-top: 3px;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          .name {
            font-size: 20px;
            color: #000;
          }

          .badge {
            display: inline-block;
            padding: 2px 10px;
            font-size: 12px;
            border-radius: 20px;
            background: @theme-color;
            color: #fff;
            transform: scale(0.8);
          }
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #aaa;
        }
      }
    }

    .body {
      position: relative;
      padding: 10px;
      box-sizing: border-box;
      color: #aaa;

      .to-detail {
        position: absolute;
        top: 0;
        right: 15px;
        font-size: 25px;
      }

      .list-item {
        margin-bottom: 10px;
        .icon {

        }

        .title {
          color: #000;
          display: inline-block;
          width: 70px;
        }

        .content {
          color: #999;
        }

        .text-info {
          color: #404bf1;
        }
        .text-danger {
          color: #f32425;
        }
        .text-warning {
          color: #de6730;
        }
      }
    }

    .footer {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      align-items: center;
      border-top: 1px solid @basic-border-color;

      .status {
        color: @theme-color;
      }
    }
  }
</style>
