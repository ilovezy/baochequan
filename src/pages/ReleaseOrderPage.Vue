<template>
  <div class="release-order-page">
    <x-header :left-options="{backText: '发布订单'}">
      <span class="icon iconfont" slot="right">&#xe61a;</span>
    </x-header>

    <div class="container">
      <div style="height:44px;">
        <sticky ref="sticky" :check-sticky-support="false">
          <tab v-model="selectTab"
               class="top-tab"
               prevent-default
               @on-before-index-change="switchTabItem"
               custom-bar-width="80px">
            <tab-item selected>精确发布</tab-item>
            <tab-item>简易发布</tab-item>
          </tab>
        </sticky>
      </div>

      <div class="form-panel">
        <div class="form-item">
          <div class="label">用车时间</div>
          <div class="content">
            <input type="text" class="form-control">
          </div>
        </div>

        <div class="form-item">
          <div class="label">第一天<br>出发地</div>
          <div class="content">
            <input type="text" class="form-control" placeholder="请输入出发地点城市和详细地址">
          </div>
        </div>

        <div class="form-item">
          <div class="label"></div>
          <div class="content">
            <x-button type="primary">
              <span class="icon iconfont">&#xe688;</span> 添加途径点
            </x-button>
          </div>
        </div>

        <div class="form-item">
          <div class="label">途径地</div>
          <div class="content">
            <input type="text" class="form-control" placeholder="请输入出发地点城市和详细地址">
          </div>
        </div>

        <div class="form-item">
          <div class="label">目的地</div>
          <div class="content">
            <input type="text" class="form-control" placeholder="请输入出发地点城市和详细地址">
          </div>
        </div>
      </div>

      <div class="form-panel">
        <div class="form-item">
          <div class="label">用车时间</div>
          <div class="content">
            <input type="text" class="form-control">
          </div>
        </div>

        <div class="form-item">
          <div class="label">第一天<br>出发地</div>
          <div class="content">
            <input type="text" class="form-control" placeholder="请输入出发地点城市和详细地址">
          </div>
        </div>

        <div class="form-item">
          <div class="label"></div>
          <div class="content">
            <x-button type="primary">
              <span class="icon iconfont">&#xe688;</span> 添加途径点
            </x-button>
          </div>
        </div>

        <div class="form-item">
          <div class="label">途径地</div>
          <div class="content">
            <input type="text" class="form-control" placeholder="请输入出发地点城市和详细地址">
          </div>
        </div>

        <div class="form-item">
          <div class="label">目的地</div>
          <div class="content">
            <input type="text" class="form-control" placeholder="请输入出发地点城市和详细地址">
          </div>
        </div>
      </div>

      <div class="form-panel">
        <div class="form-item">
          <div class="label">车型</div>
          <div class="content">
            <input type="text" class="form-control">
          </div>
        </div>

        <div class="form-item">
          <div class="label">备注</div>
          <div class="content">
            <textarea type="text" class="form-control" placeholder="请输入出发地点城市和详细地址"></textarea>
          </div>
        </div>
      </div>

      <div class="btn-wrap">
        <x-button type="primary">发布</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {TransferDom, XHeader, XButton, Tab, TabItem, Sticky} from 'vux'

  export default {
    directives: {
      TransferDom,
    },
    components: {
      XHeader, XButton, Tab, TabItem, Sticky
    },
    props: {},
    data() {
      return {
        selectTab: 0
      }
    },
    mounted() {
      console.log(this.cardInfo)
    },
    methods: {
      switchTabItem(index) {
        this.selectTab = index
      },
    }
  }
</script>

<style lang="less" scoped>
  @import './ReleaseOrderPage.less';
</style>
