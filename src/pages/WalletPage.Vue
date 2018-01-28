<template>
  <div class="page wallet-page">
    <div class="wallet-panel">
      <div class="panel-top">
        <div class="panel-top-left">
          <span class="title">我的账户余额</span>
          <span class="number">{{userInfo.restMoney}}</span>
          <popover placement="bottom" class="text" v-if="userInfo.frozenMoney">
            <div slot="content" class="popover-content">
              冻结金额为您抢单时所交的保证金，行程结束后自动返还，在此期间不能提现。
            </div>
            冻结金额：{{userInfo.frozenMoney}}元<span class="icon iconfont">&#xe631;</span>
          </popover>
        </div>
        <div class="panel-top-right">
          <div class="icon-withdraw" @click="goWithdrawPage">
            <span class="icon iconfont">&#xe632;</span>提现
          </div>
        </div>
      </div>

      <div class="panel-bottom">
        <div>
          <div class="money">{{userInfo.todayIncome || 0}}</div>
          <span class="text">今日总收入（元）</span>
        </div>
        <div>
          <div class="money">{{userInfo.todayWithdraw || 0}}</div>
          <span class="text">今日总提现（元）</span>
        </div>
      </div>
    </div>

    <group class="detail-list">
      <cell-box class="header">
        <div class="left">
          <span class="icon iconfont">&#xe72e;</span>
          <span class="text">收支明细</span>
        </div>

        <div class="right">
          <select class="form-control" v-model="filter">
            <option value="1">全部</option>
            <option value="2">收入</option>
            <option value="3">提现</option>
          </select>
        </div>
      </cell-box>

      <cell-box v-for="(item, index) in detailList"
                :key="index">
        <div class="left">
          <div class="title">{{item.title}}</div>
          <div class="date">{{item.date}}</div>
        </div>
        <div class="right">
          <div class="number danger" v-if="item.number >= 0">
            +{{item.number}}
          </div>
          <div class="number success" v-else>
            {{item.number}}
          </div>
        </div>
      </cell-box>
    </group>
  </div>
</template>

<script>
  import {Box, TransferDom, Popover, Group, Cell, CellBox} from 'vux'

  export default {
    directives: {
      TransferDom,
    },
    components: {
      Box, Popover, Group, Cell, CellBox
    },
    mounted() {
      this.getData()
    },
    data() {
      return {
        userInfo: {},
        detailList: [],
        filter: 1
      }
    },
    methods: {
      getData() {
        const self = this
        axios.get('static/puppetData/walletPageData.json').then((res) => {
          const data = window.formatJsonData(res.data)
          self.userInfo = data.userInfo || {}
          self.detailList = data.detailList || []
        })
      },

      goWithdrawPage(){
        this.$router.push('/withdrawPage')
      }
    }
  }
</script>

<style lang="less">
  @import "./WalletPage";
</style>
