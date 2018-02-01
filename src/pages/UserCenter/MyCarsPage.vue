<template>
  <div class="page mycars-page">
    <x-header :left-options="{backText: ''}">我的车辆</x-header>

    <div class="container">
      <div class="top-bar">
        <div class="left"></div>
        <div class="center">
添加车辆 <span class="icon iconfont text-danger">&#xe610;</span>
        </div>
        <div class="right">
          <span class="icon iconfont">&#xe61a;</span>
        </div>
      </div>

      <div class="car-list">
        <car-card v-for="(item, index) in carList"
                  :card-info="item"
                  :key="index"></car-card>
      </div>
    </div>
  </div>
</template>

<script>

  import {XHeader, Box, TransferDom, XButton,Selector, Group, Cell} from 'vux'
  import CarCard from '@/components/CarCard'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader, XButton, Box, Group, Cell,Selector,CarCard
    },

    mounted() {
      this.getData()
    },

    data() {
      return {
        carList: []
      }
    },
    methods: {
      getData() {
        const self = this
        axios.get('static/puppetData/myCarsPageData.json').then((res) => {
          self.carList = window.formatJsonData(res.data)
        })
      },
    }
  }
</script>

<style lang="less">
  @import './MyCarsPage';
</style>
