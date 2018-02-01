<template>
  <div class="card card-bid-record-more">
    <span class="index">{{index + 1}}</span>

    <div class="content">
      <div class="top">
        <span class="top-left">
          <span class="avatar">
            <img src="../assets/avatar.png" alt="">
          </span>
          <div class="basic">
            <div class="name">{{cardInfo.name}}师傅</div>
            <div class="service-time">服务{{cardInfo.serviceTime}}次</div>
          </div>

          <span class="icon iconfont text-danger">&#xe646;</span>

           <!--<popover placement="bottom" class="text" v-if="cardInfo.showIcon">-->
             <!--<div slot="content" class="popover-content">-->
<!--现在可以拨打电话联系司机了，联系时请说是在包车圈看到的-->
             <!--</div>-->
             <!--<span class="icon iconfont text-danger">&#xe646;</span>-->
          <!--</popover>-->
        </span>

        <span class="top-right">
          <div class="call-price">
            <span class="text">报价:</span>
            <span class="price text-grey" v-if="cardInfo.hidePrice">***元</span>
            <span class="price" v-else>{{cardInfo.price || 0}}元</span>
          </div>
          <span class="icon iconfont">&#xe78b;</span>
        </span>
      </div>

      <div class="bottom">
        <div class="bottom-left">
          <div class="text">车龄{{cardInfo.carAge}}年</div>
          <div class="text">超时/超公里：{{cardInfo.overTime}}元/{{cardInfo.overLength}}元</div>
        </div>
        <div class="bottom-right">
          <x-button type="primary">选择司机</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {TransferDom, XButton, Popover} from 'vux'

  export default {
    directives: {
      TransferDom,
    },
    components: {
      XButton, Popover
    },
    props: {
      cardInfo: {
        name: '',
        serviceTime: '',
        price: 0,
        carAge: 0,
        overTime: 0,
        overLength: 0
      },
      index: '',
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

  .card-bid-record-more {
    margin: 15px;
    padding: 15px;
    display: flex;
    .index {
      min-width: 30px;
      color: #FFAA00;
      font-weight: bold;
      font-size: 20px;
    }

    .content {
      flex: 1;
      .top {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid @basic-border-color;
        padding-bottom: 5px;
        margin-bottom: 15px;
        .top-left {
          display: flex;
          justify-content: space-between;
          .avatar {
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 40px;
            overflow: hidden;
            margin-right: 10px;
          }
          .basic {
            margin-right: 10px;
            .name {
              color: @text-color3;
              font-size: 15px;
            }
          }

          .iconfont {
            font-size: 28px;
          }

          .service-time {
            color: @text-color8;
            font-size: 12px;
          }
        }

        .top-right {
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .iconfont {
            margin-left: 10px;
            color: #999;
          }

          .call-price {
            display: flex;
            align-items: center;
          }

          .price {
            font-size: 17px;
            color: @theme-color-danger;

            &.text-grey {
              color: #333333;
            }
          }
        }

      }

      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .bottom-left {
          color: @text-color8;
          font-size: 13px;
        }

        .bottom-right {
          button {
            height: 33px;
            line-height: 33px;
          }
        }
      }
    }
  }
</style>
