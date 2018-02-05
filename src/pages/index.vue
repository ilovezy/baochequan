<template>
  <div class="page grab-singe-page" style="height: 100%">
    <drawer
      width="200px;"
      :show.sync="drawerVisibility"
      :show-mode="showModeValue"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#35495e', width: '200px'}">

      <!-- drawer content -->
      <div slot="drawer" class="drawer-container">
        <div class="top">
          <span class="avatar">
            <img src="../assets/avatar.png" alt="">
          </span>
          <div class="text">莫国富</div>
        </div>

        <ul class="nav-list">
          <li class="nav-list-item">
            <router-link :to="{ path: '/slide/walletPage'}">
              <span class="iconfont">&#xe60b;</span>钱包
            </router-link>
          </li>
          <li class="nav-list-item">
            <router-link :to="{ path: '/slide/walletPage'}">
              <span class="iconfont">&#xe61f;</span>客服
            </router-link>
          </li>
          <li class="nav-list-item">
            <router-link :to="{ path: '/slide/walletPage'}">
              <span class="iconfont">&#xe65b;</span>设置
            </router-link>
          </li>
          <li class="nav-list-item">
            <router-link :to="{ path: '/slide/myCarsPage'}">
              <span class="iconfont">&#xe68a;</span>车辆列表
            </router-link>
          </li>
          <li class="nav-list-item">
            <router-link :to="{ path: '/slide/walletPage'}">
              <span class="iconfont">&#xe62b;</span>推荐车主
            </router-link>
          </li>

          <li class="nav-list-item">
            <router-link :to="{ path: '/slide/orderDetailPage'}">
              <span class="iconfont">&#xe62b;</span>订单详情
            </router-link>
          </li>
          <li class="nav-list-item">
            <router-link :to="{ path: '/slide/bidRecordPage'}">
              <span class="iconfont">&#xe62b;</span>竞价记录
            </router-link>
          </li>
          <li class="nav-list-item">
            <router-link :to="{ path: '/slide/bidRecordMorePage'}">
              <span class="iconfont">&#xe62b;</span>竞价记录(详)
            </router-link>
          </li>
          <li class="nav-list-item">
            <router-link :to="{ path: '/slide/carRegisterPage'}">
              <span class="iconfont">&#xe62b;</span>车辆注册
            </router-link>
          </li>
          <li class="nav-list-item">
            <router-link :to="{ path: '/slide/driverDetailPage'}">
              <span class="iconfont">&#xe62b;</span>司机详情
            </router-link>
          </li>
        </ul>
      </div>

      <view-box ref="viewBox">
        <div class="header">
          <div class="left" @click="openDrawer">
          <span class="avatar">
            <img src="../assets/avatar.png" alt="">
          </span>
            <span class="user-info">
            <span class="name">{{name}}</span>
            <span class="phone">{{phone}}</span>
          </span>
          </div>

          <div class="center">
            <a :class="showGrab ? 'active' : ''" @click="toggleView">抢单</a>
            <a :class="showGrab ? '' : 'active'" @click="toggleView">发单</a>
          </div>

          <div class="right">
            <x-button mini type="primary" @click.native="goReleaseOrderPages">我要发单</x-button>
          </div>
        </div>

        <tab v-if="showGrab">
          <tab-item selected @on-item-click="onItemClick('orderSea')">抢单池</tab-item>
          <tab-item @on-item-click="onItemClick('getOrder')">已抢订单</tab-item>
          <tab-item @on-item-click="onItemClick('completedOrder')">已完成</tab-item>
        </tab>

        <tab v-else>
          <tab-item selected @on-item-click="onItemClick">已发订单</tab-item>
          <tab-item @on-item-click="onItemClick">代开始</tab-item>
          <tab-item @on-item-click="onItemClick">已完成</tab-item>
        </tab>

        <div class="content-container">
          <div class="control-bar">
            <div class="btns-wrap">
              <span class="btn-mini"
                    :class="controlType==1 ? 'active': ''"
                    @click="changeControlType(1)"
              >全部订单

                <span class="icon-selected">
                  <span class="iconfont">&#xe721;</span>
                </span>
              </span>
              <span class="btn-mini"
                    :class="controlType==2 ? 'active': ''"
                    @click="changeControlType(2)"
              >顺风套单

                <span class="icon-selected">
                  <span class="iconfont">&#xe721;</span>
                </span>
              </span>
              <span class="btn-mini"
                    :class="controlType==3 ? 'active': ''"
                    @click="changeControlType(3)"
              >常规包车

                <span class="icon-selected">
                  <span class="iconfont">&#xe721;</span>
                </span>
              </span>
            </div>

            <!--<div class="number">{{orderNum}}个订单</div>-->

            <select class="form-control" v-model="filter" @change="filterChange">
              <option value="1">智能排序</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div class="card-list-container">
            <order-card v-for="(item, index) in orderList"
                        v-if="orderList.length > 0"
                        :card-info="item"
                        :key="index"/>
            <infinite-loading @infinite="infiniteHandler"></infinite-loading>
          </div>
        </div>

      </view-box>
    </drawer>
  </div>
</template>

<script>
  import {XHeader, Box, TransferDom, XButton, Tab, TabItem, Drawer, Group, Cell, ViewBox} from 'vux'
  import OrderCard from '@/components/OrderCard'
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    directives: {
      TransferDom,
    },
    components: {
      XHeader, XButton, Box, Tab, TabItem, Drawer, Group, Cell, ViewBox, OrderCard,
      InfiniteLoading
    },

    mounted() {
      this.getData()
    },

    data() {
      return {
        name: '李永波',
        phone: '1768***123',
        avatarUrl: '../assets/avatar.png',
        transitionName: '',
        showGrab: true,

        filter: 1,
        orderList: [],

        currentPanel: 'orderSea',
        controlType: 1,

        drawerVisibility: false,
        showModeValue: 'overlay', //  'overlay' or 'push'
        showPlacementValue: 'left', // 'left' or 'right'
      }
    },

    computed: {
      orderNum() {
        return this.orderList.length || 0
      }
    },

    methods: {
      changeControlType(type) {
        this.controlType = type
      },
      getData() {
        // 这里的6种情况其实都只需要根据状态来判断即可，
        const self = this
        let param = {
          dataType: this.currentPanel,
          filter: this.filter,
        }
        axios.get('static/puppetData/orderList.json', param).then((res) => {
          self.orderList = window.formatJsonData(res.data)
        })
      },

      filterChange() {
        this.getData() // filter变化的时候去调用数据即可
      },

      openDrawer() {
        this.drawerVisibility = true
      },
      toggleView() {
        this.showGrab = !this.showGrab
        console.log(12)
      },

      onItemClick(type) {
        this.currentPanel = type
      },

      goReleaseOrderPages() {
        this.$router.push('/slide/releaseOrderPage')
      },

      infiniteHandler($state) {
        setTimeout(() => {
          const temp = [];
          for (let i = this.orderList.length + 1; i <= this.orderList.length + 3; i++) {
            temp.push({
              "name": "Soso",
              "avatar": "http://res.xiaomaiketang.com/xiaomai/riceDumpling_201703017.png",
              "tag": "车队",
              "iconType": 1,
              "totalOrder": 12,
              "totalService": 6,
              "orderId": "20131",
              "userCarNum": 5,
              "beginDate": "2018-02-01 15:15",
              "totalDay": 1,
              "startPoint": "杭州市",
              "endPoint": "上海市",
              "totalLength": 198.00,
              "price": 0,
              "peopleCount": 33
            });
          }
          this.orderList = this.orderList.concat(temp);
          $state.loaded();
        }, 1000);
      },
    }
  }
</script>

<style lang="less">
  @import "./index";
</style>
