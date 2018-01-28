<template>
  <div class="card card-bid-record">
    <span class="index">{{index + 1}}</span>

    <div class="content">
      <div class="top">
        <span class="top-left">
          <span class="name">{{cardInfo.name}}师傅</span>
          <span class="service-time">服务{{cardInfo.serviceTime}}次</span>
        </span>

        <span class="top-right">
          <span class="text">报价：</span>
          <span class="price text-grey" v-if="cardInfo.hidePrice">***元</span>
          <span class="price" v-else>{{cardInfo.price || 0}}元</span>
        </span>
      </div>

      <div class="bottom">
        <div class="bottom-left">
          <div class="text">车龄{{cardInfo.carAge}}年</div>
          <div class="text">超时/超公里：{{cardInfo.overTime}}元/{{cardInfo.overLength}}元</div>
        </div>
        <div class="bottom-right" v-if="!cardInfo.hidePrice">
          <x-button type="primary">我要改价</x-button>
        </div>
      </div>
    </div>
  </div>
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

  .card-bid-record {
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
          .name {
            color: @text-color3;
            font-size: 15px;

          }
          .service-time {
            color: @text-color8;
            font-size: 12px;
          }
        }

        .top-right {
          font-size: 14px;

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
