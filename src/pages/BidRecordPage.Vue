<template>
  <div class="page bid-record-page">
    <x-header :left-options="{backText: '竞价记录'}">
      <span class="icon iconfont" slot="right">&#xe61a;</span>
    </x-header>

    <div class="container">
      <div class="car-list">
        <bid-record-card v-for="(item, index) in carList"
                         :card-info="item"
                         :index="index"
                         :key="index"></bid-record-card>
      </div>
    </div>
  </div>
</template>

<script>

  import {XHeader, Box, TransferDom, XButton, Group, Cell} from 'vux'
  import BidRecordCard from '@/components/BidRecordCard'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader, XButton, Box, Group, Cell, BidRecordCard
    },

    computed: {},

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
        axios.get('static/puppetData/bidRecordPageData.json').then((res) => {
          self.carList = window.formatJsonData(res.data)
        })
      },
    }
  }
</script>

<style lang="less">
  @import './BidRecordPage';
</style>
