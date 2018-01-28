<template>
  <div class="page car-register-page">
    <x-header :left-options="{backText: ''}">车辆注册</x-header>

    <div class="container">
      <group>
        <x-input
                 :title='`<span class="icon-required">*</span> 车型`'
                 placeholder="I'm placeholder"></x-input>

        <x-input
          :title='`<span class="icon-required">*</span> 车型`'
          placeholder="I'm placeholder"></x-input>

        <x-input
          :title='`<span class="icon-required">*</span> 车型`'
          placeholder="I'm placeholder"></x-input>

        <x-input
          :title='`<span class="icon-required">*</span> 车型`'
          placeholder="I'm placeholder"></x-input>

        <x-input
          :title='`<span class="icon-required">*</span> 车型`'
          placeholder="I'm placeholder"></x-input>

        <x-input
          :title='`<span class="icon-required">*</span> 车型`'
          placeholder="I'm placeholder"></x-input>

        <flexbox class="upload-wrap" :gutter="15">
          <flexbox-item>
            <div class="upload-title">
              <span class="icon-required">*</span> 车头照片
            </div>
            <div class="upload-btn">
              <span class="icon iconfont">&#xe688;</span>
              <div class="text">点击上传</div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="upload-title">
              <span class="icon-required">*</span> 车头照片
            </div>
            <div class="upload-btn">
              <span class="icon iconfont">&#xe688;</span>
              <div class="text">点击上传</div>
            </div>
          </flexbox-item>
        </flexbox>
        <flexbox class="upload-wrap" :gutter="15">
          <flexbox-item>
            <div class="upload-title">
              <span class="icon-required">*</span> 车头照片
            </div>
            <div class="upload-btn">
              <span class="icon iconfont">&#xe688;</span>
              <div class="text">点击上传</div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="upload-title">
              <span class="icon-required">*</span> 车头照片
            </div>
            <div class="upload-btn">
              <span class="icon iconfont">&#xe688;</span>
              <div class="text">点击上传</div>
            </div>
          </flexbox-item>
        </flexbox>
      </group>

      <div class="btn-wrap">
        <x-button type="primary">提交审核</x-button>
      </div>
    </div>
  </div>
</template>

<script>

  import {XHeader, Box, TransferDom, XButton, Group, Cell, XInput, Flexbox, FlexboxItem} from 'vux'
  import BidRecordCard from '@/components/BidRecordCard'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader, XButton, Box, Group, Cell, BidRecordCard, XInput, Flexbox, FlexboxItem
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
  @import './CarRegisterPage';
</style>
