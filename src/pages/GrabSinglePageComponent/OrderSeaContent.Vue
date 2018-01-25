<template>
  <div class="content release-content">
    <div class="control-bar">
      <div class="number">{{orderNum}}个订单</div>
      <select v-model="filter" @change="filterChange">
        <option value="1">智能排序</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>

    <div class="card-list-container">

      <div class="card">
        <div class="header">
          <span class="avatar">
            <img src="../../assets/avatar.png" alt="">
          </span>

          <div class="basic-info">
            <div class="top">
              <span class="name">Soso</span>
              <span class="badge">旅行社</span>
            </div>

            <div class="bottom">
              <div class="info">下单20次 服务50次</div>
              <div class="order-id">
                订单号：123113
              </div>
            </div>
          </div>
        </div>

        <div class="body">
          <div class="detail">

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
      </div>

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
        orderNum: 36,
        filter: 1,
      }
    },
    methods: {
      filterChange() {
        console.log(this.filter)
      }
    }
  }
</script>

<style lang="less">
  @theme-color: #EF5A48;
  @basic-border-color: #D5D5D5;
  @sub-text-color: #aaa;
  @basic-shadow-color: #aaa;

  .control-bar {
    background: #fff;
    height: 45px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0 4px @basic-shadow-color;
    padding: 0 10px;
    align-items: center;
    .number {
      color: @sub-text-color;
    }

    select {
      height: 30px;
      min-width: 80px;
      border: 1px solid @basic-border-color;
      border-radius: 4px;
    }
  }

  .card-list-container {
    .card {
      background: #fff;
      margin: 10px;
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 4px;
      box-shadow: 1px 1px 2px @basic-shadow-color;

      .header {
        .avatar {
          width: 60px;
          height: 60px;
          border-radius:60px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
      }

      .body {

      }

      .footer {
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        align-items: center;

        .status{
          color: @theme-color;
        }
      }
    }
  }
</style>
