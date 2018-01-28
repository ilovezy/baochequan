<template>
  <div class="card card-car">
    <div class="ribbon-left">
      <div class="text">审核通过</div>
    </div>

    <div class="left">
      <img class="avatar" :src="cardInfo.avatar" alt="">
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
</template>

<script>
  import {TransferDom} from 'vux'

  export default {
    directives: {
      TransferDom,
    },
    components: {
    },
    props: {
      cardInfo: {}
    },
    data() {
      return {

      }
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
    margin: 15px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .ribbon-left {
      position: absolute;
      top: 0;
      left: 0;
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
        left: 0px;
        transform: rotate(-30deg);
        overflow: hidden;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 40px solid #fff;
        border-left: 60px solid transparent;
      }
    }
    .left {
      width: 100px;
      height: 100px;
      overflow: hidden;
      img {
        width: 100%;
      }

    }

    .right {
      .list-container {
        .list-item {
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

</style>
