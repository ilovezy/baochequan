<template>
  <div class="card card-car">
    <div class="body">
      <div class="left">
        <div class="ribbon-left">
          <div class="text">审核通过</div>
        </div>

        <div class="avatar-wrap">
          <img class="avatar" :src="cardInfo.avatar" alt="">
        </div>
      </div>
      <div class="right">
        <div class="list-container">
          <div class="list-item">
            <span class="label">姓名：</span><span class="content">{{cardInfo.name}}</span>
            <span class="label">车型：</span><span class="content">奥迪A6L</span>
          </div>
          <div class="list-item">
            <span class="label">座位数：</span><span class="content">5座</span>
            <span class="label">车牌号：</span><span class="content">浙A12221</span>
          </div>
          <div class="list-item">
            <span class="label">购买时间：</span><span class="content">李四</span>
          </div>
          <div class="list-item">
            <span class="label">所在区域：</span><span class="content">浙江省杭州市余杭区</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {TransferDom} from 'vux'

  export default {
    directives: {
      TransferDom,
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

  .card-car {
    /*margin: 15px;*/
    display: flex;
    justify-content: space-between;
    .body {
      display: flex;
      .left {
        width: 100px;
        height: 100px;
        overflow: hidden;
        margin-right: 5px;
        position: relative;
        padding: 10px;
        padding-right: 0;

        .card-wrap {

          img {
            width: 100%;
          }
        }

        .ribbon-left {
          position: absolute;
          top: 6px;
          left: -26px;
          background: #ff272f;
          color: #fff;
          width: 100px;
          height: 20px;
          font-size: 12px;
          line-height: 20px;
          transform: rotate(-30deg);
          text-align: center;

          &.warning {
            background: #e28521;
          }
        }
      }

      @media screen and (max-width: 320px) {
        .left {
          width: 60px;
          height: 60px;
          margin-right: 10px;
        }
      }
      .right {
        flex: 1;
        padding: 10px;
        .list-container {
          .list-item {
            margin-bottom: 4px;
            .label {
              color: @text-color3;
            }
            .content {
              margin-right: 15px;
              color: @text-color6;
            }
          }
        }
      }
    }

  }

</style>
