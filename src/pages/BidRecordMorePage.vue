<template>
  <div class="page bid-record-more-page">
    <x-header :left-options="{backText: '竞价记录(详细)'}">
      <span class="icon iconfont" slot="right">&#xe61a;</span>
    </x-header>

    <div class="container">
      <div class="car-list">
        <bid-record-more-card v-for="(item, index) in carList"
                         :card-info="item"
                         :index="index"
                         :key="index"></bid-record-more-card>
      </div>
    </div>
  </div>
</template>

<script>

  import {XHeader, Box, TransferDom, XButton, Group, Cell} from 'vux'
  import BidRecordMoreCard from '@/components/BidRecordMoreCard'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader, XButton, Box, Group, Cell, BidRecordMoreCard
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
        axios.get('static/puppetData/bidRecordMorePageData.json').then((res) => {
          self.carList = window.formatJsonData(res.data)
        })
      },
    }
  }
</script>

<style lang="less">
  @import './BidRecordPage';
</style>
