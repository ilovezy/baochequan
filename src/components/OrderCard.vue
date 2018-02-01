<template>

  <section class="card order-card">
    <span class="top-card-icon primary"
          v-if="cardInfo.type">常规包车</span>
    <span class="top-card-icon warning"
          v-else>顺风套单</span>

    <div class="header">
      <span class="ribbon">
        <span class="text">未完成</span>
      </span>

      <span class="avatar">
        <img :src="cardInfo.avatar" alt="">
      </span>

      <div class="basic-info">
        <div class="top">
          <span class="name">{{cardInfo.name}}</span>
          <span class="badge"
                :class="cardInfo.iconType == 1 ? 'info' : ''">{{cardInfo.tag}}</span>
        </div>

        <div class="bottom">
          <span class="info">下单{{cardInfo.totalOrder}}次 服务{{cardInfo.totalService}}次</span>
          <span class="order-id">订单号：{{cardInfo.orderId}}</span>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="list-item">
        <span class="icon iconfont">&#xe68a;</span>
        <span class="title">用车座位</span>
        <span class="content">{{cardInfo.userCarNum}}座</span>
      </div>
      <div class="list-item">
        <span class="icon iconfont text-info">&#xe606;</span>
        <span class="title text-danger">用车时间</span>
        <span class="content text-danger">{{cardInfo.beginDate}} 共{{cardInfo.totalDay}}天</span>
      </div>
      <div class="list-item">
        <span class="icon iconfont text-info">&#xe798;</span>
        <span class="title">行程</span>
        <span class="content">{{cardInfo.startPoint}} - {{cardInfo.endPoint}}</span>
      </div>
      <div class="list-item">
        <span class="icon iconfont text-warning">&#xe630;</span>
        <span class="title">总里程</span>
        <span class="content">{{cardInfo.totalLength}} 公里</span>
      </div>
    </div>

    <div class="footer">
      <div class="price" v-if="cardInfo.price">￥{{cardInfo.price}}</div>
      <div class="status" v-else>已有{{cardInfo.peopleCount}}人报价</div>
      <div>
        <x-button type="primary" mini v-if="cardInfo.price">
          立即抢单
        </x-button>

        <x-button type="primary" mini v-else>
          我要报价
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
      return {}
    },
    mounted() {
      console.log(this.cardInfo)
    },
    methods: {}
  }
</script>

<style lang="less">
  @import '../style/basic.less';

  @sub-text-color: #aaa;
  @basic-shadow-color: #aaa;

  .order-card {
    margin: @basic-margin;
    position: relative;
    margin-top: 35px;
    overflow: visible;
    .top-card-icon {
      font-size: 12px;
      color: #fff;
      height: 20px;
      line-height: 20px;
      text-align: center;
      position: absolute;
      top: -20px;
      padding: 0 8px;
      &.primary {
        background: @theme-color-error;
      }
      &.warning {
        background: @theme-color-primary;
      }
    }


    .header {
      border-bottom: none;
      padding-right: 0;
      overflow: hidden;
      position: relative;

      .ribbon {
        position: absolute;
        top: 6px;
        right: -26px;
        background: #ff272f;
        color: #fff;
        width: 100px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        transform: rotate(30deg);
        text-align: center;

        &.warning {
          background: #e28521;
        }
      }

      .avatar {
        display: inline-block;
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
        padding-right: 10px;

        .top {
          margin-top: 3px;
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

            &.info {
              background: #3d5df1;
            }
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
        margin-bottom: 5px;
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
    @media screen and (max-width: 320px) {
      .body {
        font-size: 13px;
        .list-item {
          .title {
            width: 60px;
          }
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
