<template>
  <div class="page driver-detail-page">
    <x-header :left-options="{backText: '全部报价'}">
      <span class="icon iconfont" slot="right">&#xe61a;</span>
    </x-header>

    <div class="container">

      <div class="card card-info">
        <div class="body">
          <span class="avatar">
            <img src="../assets/avatar.png" alt="">
          </span>

          <div class="basic-info">
            <flexbox :gutter="15">
              <flexbox-item>
                <div class="top">
                  <span class="name">SOSO</span>
                  <span class="badge">旅行社</span>
                </div>
                <div class="bottom">
                  <span class="info">下单20次 服务50次</span>
                </div>
              </flexbox-item>
              <flexbox-item class="total-rate">
                综合评分：<span class="text-danger">4.0</span>
              </flexbox-item>
            </flexbox>
          </div>
        </div>
        <div class="footer">
          <flexbox :gutter="15">
            <flexbox-item>
              <span class="label">车型</span>
              <span class="content text-danger">奥迪A6L</span>
            </flexbox-item>
            <flexbox-item>
              <span class="label">车辆年限</span>
              <span class="content text-danger">2年</span>
            </flexbox-item>
          </flexbox>
        </div>
      </div>

      <div class="card card-plan">
        <div class="header">
          <span class="icon iconfont">&#xe91b;</span>报价方案
        </div>
        <div class="body">
          <flexbox :gutter="15" class="plan-item">
            <flexbox-item>
              <span class="label">订单总价</span>
              <span class="content text-danger">{{500}}元</span>
            </flexbox-item>
            <flexbox-item>
              <span class="label">司机餐补</span>
              <span class="content text-danger">{{500}}元/餐</span>
            </flexbox-item>
          </flexbox>
          <flexbox :gutter="15" class="plan-item">
            <flexbox-item>
              <span class="label">超功里价</span>
              <span class="content text-danger">{{500}}元/公里</span>
            </flexbox-item>
            <flexbox-item>
              <span class="label">超时费用</span>
              <span class="content text-danger">{{500}}元/时</span>
            </flexbox-item>
          </flexbox>
          <flexbox :gutter="15" class="plan-item">
            <flexbox-item>
              <span class="label">住宿费用</span>
              <span class="content text-danger">{{500}}元/天</span>
            </flexbox-item>
            <flexbox-item>
              <span class="label">其他补充</span>
              <span class="content text-danger">无</span>
            </flexbox-item>
          </flexbox>
        </div>
      </div>

      <div class="card card-judge">
        <div class="header">
          <span class="icon iconfont">&#xe629;</span>评价详情
        </div>
        <div class="body">
          <div class="judge-item">
            <span class="title">司机评价</span>
            <rater :max="5" v-model="rate1"></rater>
            <span>{{rate1}} 分</span>

          </div>
          <div class="judge-item">
            <span class="title">司机评价</span>
            <rater :max="5" v-model="rate2"></rater>
            <span>{{rate2}} 分</span>
          </div>
          <div class="judge-item">
            <span class="title">司机评价</span>
            <rater :max="5" v-model="rate3"></rater>
            <span>{{rate3}} 分</span>

          </div>
        </div>
      </div>

      <div class="card card-car-item">
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

  import {XHeader, Box, TransferDom, XButton, Group, Cell, Flexbox, FlexboxItem, Rater} from 'vux'

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
    methods: {
      getData() {

      }
    }
  }
</script>

<style lang="less">
  @import './DriverDetailPage';
</style>
