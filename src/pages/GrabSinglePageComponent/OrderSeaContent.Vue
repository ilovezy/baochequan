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
      <order-card v-for="(item, index) in orderList"
                  card-info="item"
                  :key="index"/>
    </div>
  </div>
</template>

<script>
  import {XHeader, Box, TransferDom, XButton, Tab, TabItem} from 'vux'
  import OrderCard from '@/components/OrderCard'

  export default {
    directives: {
      TransferDom,
    },
    components: {
      XHeader, XButton, Box, Tab, TabItem, OrderCard
    },
    data() {
      return {
        orderNum: 36,
        filter: 1,
        orderList: [{
          name: 'Soso'
        }, {
          name: 'jack'
        }, {
          name: 'mark'
        }]
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
    padding: 0 15px;
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
    padding-bottom: 150px;
  }
</style>
