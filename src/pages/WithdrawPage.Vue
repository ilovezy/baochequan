<template>
  <div class="page withdraw-page">
    <x-header :left-options="{backText: ''}">提现</x-header>

    <div class="container">
      <div class="card card-a">
        <div class="top">
          <span class="title">提现金额</span>
          <span>
            <span class="icon">￥</span> <input type="number" class="form-control">
          </span>
        </div>
        <div class="bottom">
          <span class="text">当前可提现余额：{{400}}元</span>
          <span class="text-withdraw">全部提现</span>
        </div>
      </div>

      <div class="card card-b">
        <group label-width="2em" label-margin-right="1em" label-align="right">
          <selector title="银行"
                    placeholder="请选择银行"
                    :options="['交通银行', '中国银行']"
                    v-model="value8">
            <span slot="restricted-label" class="icon iconfont">&#xe72e;</span>
          </selector>

          <x-input placeholder="请输入银行支行">
            <span slot="restricted-label" class="icon iconfont">&#xe64b;</span>
          </x-input>
          <x-input placeholder="请输入银行卡卡号">
            <span slot="restricted-label" class="icon iconfont">&#xe61b;</span>
          </x-input>
          <x-input placeholder="请输入真实姓名">
            <span slot="restricted-label" class="icon iconfont">&#xe613;</span>
          </x-input>
          <x-input placeholder="请输入验证码">
            <span slot="restricted-label" class="icon iconfont">&#xe627;</span>
            <span slot="restricted-label" class="spe-btn">发送验证码</span>
          </x-input>

          <cell class="notice" value-align="left">
            验证码将发送至 <span class="text">{{noticePhoneStr}}</span> 请注意查收
          </cell>
        </group>
      </div>

      <x-button type="primary">立即提现</x-button>
    </div>
  </div>
</template>

<script>

  import {XHeader, Box, TransferDom, XButton, Icon, XInput, Selector, XDialog, Toast, Group, Cell} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader, XButton, Box, XInput, Icon, XDialog, Toast, Group, Cell,Selector
    },

    computed: {
      noticePhoneStr:  function () {
        return '158****9080'
      }
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less">
  @import './WithdrawPage';
</style>
