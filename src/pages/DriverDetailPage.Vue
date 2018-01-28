<template>
  <div class="page driver-detail-page">
    <x-header :left-options="{backText: '全部报价'}">
      <span class="icon iconfont" slot="right">&#xe61a;</span>
    </x-header>

    <div class="container">

      <div class="card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam fugit illo incidunt pariatur placeat, quasi qui quibusdam saepe voluptatum.</div>

      <div class="card">
        <div class="header">
          <span class="icon iconfont">&#xe91b;</span>报价方案
        </div>
        <div class="body"></div>
      </div>

      <div class="card card-judge">
        <div class="header">
          <span class="icon iconfont">&#xe629;</span>评价详情
        </div>
        <div class="body">
          <div class="judge-item">
            <span class="title">司机评价</span>
            <rater :max="5" v-model="rate1"></rater>            <span>{{rate1}} 分</span>

          </div>
          <div class="judge-item">
            <span class="title">司机评价</span>
            <rater :max="5" v-model="rate2"></rater>
            <span>{{rate2}} 分</span>
          </div>
          <div class="judge-item">
            <span class="title">司机评价</span>
            <rater :max="5" v-model="rate3"></rater>            <span>{{rate3}} 分</span>

          </div>
        </div>
      </div>

      <div class="card card-car">
        <div class="header">
          <span class="icon iconfont">&#xe825;</span>车辆照片
        </div>
        <div class="body">
          <flexbox :gutter="15" class="img-wrap">
            <flexbox-item>
              <img src="../assets/car.jpg" alt="">
            </flexbox-item>
            <flexbox-item>
              <img src="../assets/car.jpg" alt="">
            </flexbox-item>
          </flexbox>
        </div>
      </div>

      <flexbox :gutter="30" class="btn-wrap">
        <flexbox-item>
          <x-button>查看其他司机</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary">选择该司机</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>

  import {XHeader, Box, TransferDom, XButton, Group, Cell, Flexbox, FlexboxItem,Rater} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader, XButton, Box, Group, Cell, Flexbox, FlexboxItem, Rater
    },

    computed: {},

    mounted() {
      this.getData()
    },

    data() {
      return {
        carList: [],
        rate1: 3,
        rate2: 4.5,
        rate3: 5,
      }
    },
    methods: {}
  }
</script>

<style lang="less">
  @import './DriverDetailPage';
</style>
