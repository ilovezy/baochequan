<template>
  <div class="page order-detail-page">
    <x-header :left-options="{backText: '订单详情'}">
      <span class="icon iconfont" slot="right">&#xe61a;</span>
    </x-header>

    <div class="container">

      <div class="card card-info">
        <div class="body">
          <span class="avatar">
            <img src="../assets/avatar.png" alt="">
          </span>

          <div class="basic-info">
            <flexbox>
              <flexbox-item :span="3/4">
                <div class="top">
                  <span class="name">SOSO</span>
                  <span class="badge">旅行社</span>
                </div>
                <div class="bottom">
                  <span class="icon-userType">乘客</span>
                  <span class="info">下单20次 服务50次</span>
                </div>
              </flexbox-item>
              <flexbox-item class="btn-call" :span="1/4">
                <div class="iconfont text-danger">&#xe646;</div>
              </flexbox-item>
            </flexbox>
          </div>
        </div>
        <div class="footer">
          <div class="content">
            <div class="item">
              <span class="iconfont text-info">&#xe606;</span>
              <span class="text-danger">
                集合时间：2018-1-31 21:00 (共1天)
              </span>
            </div>

            <div class="item">
              <span class="iconfont">&#xe614;</span>
              <span class="text-danger">
                集合地点：上海时浦东新区普通机场2号楼 到达停车场
              </span>
            </div>
          </div>
          <span class="right-icon iconfont">&#xe78b;</span>
        </div>
      </div>

      <div class="card card-price-record">
        <div class="header">
          <span class="icon iconfont">&#xe91b;</span>竞价记录
        </div>
        <div class="body">
          <flexbox :gutter="15">
            <flexbox-item>
              <div class="price-item">
                <div class="name">王师傅</div>
                <div class="price">{{1000}}元</div>
                <span class="icon icon-lead">
                <img src="../assets/icon-lead.png" alt="">
              </span>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="price-item">
                <div class="name">王师傅</div>
                <div class="price">{{1000}}元</div>
                <span class="icon icon-lead">
                <img src="../assets/icon-lead.png" alt="">
              </span>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="price-item">
                <div class="name">王师傅</div>
                <div class="price">{{1000}}元</div>
                <span class="icon icon-lead">
                <img src="../assets/icon-lead.png" alt="">
              </span>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>

      <div class="card card-plan">
        <div class="header">
          <span class="icon iconfont">&#xe91b;</span>订单信息
        </div>
        <div class="body">
          <flexbox :gutter="15" class="plan-item">
            <flexbox-item>
              <span class="label">订单类型</span>
              <span class="content text-danger">竞价单</span>
            </flexbox-item>
            <flexbox-item>
              <span class="label">订单编号</span>
              <span class="content text-danger">21051</span>
            </flexbox-item>
          </flexbox>
          <flexbox :gutter="15" class="plan-item">
            <flexbox-item>
              <span class="label">用车座位</span>
              <span class="content text-danger">{{5}}座</span>
            </flexbox-item>
            <flexbox-item>
              <span class="label">车辆数量</span>
              <span class="content text-danger">{{1}}辆</span>
            </flexbox-item>
          </flexbox>
          <flexbox :gutter="15" class="plan-item">
            <flexbox-item>
              <span class="label">车型要求</span>
              <span class="content"></span>
            </flexbox-item>
            <flexbox-item>
              <span class="label">发票需求</span>
              <span class="content">不需要发票</span>
            </flexbox-item>
          </flexbox>
          <flexbox class="plan-item">
            <flexbox-item>
              <span class="label">其他备注</span>
              <span class="content">随便写点</span>
            </flexbox-item>
          </flexbox>
        </div>
      </div>

      <div class="card card-plan">
        <div class="header">
          <span class="icon iconfont">&#xe672;</span>价格信息
        </div>
        <div class="body">
          <flexbox :gutter="15" class="plan-item">
            <flexbox-item>
              <span class="label">订单总价</span>
              <span class="content text-danger">191.00元</span>
            </flexbox-item>
            <flexbox-item>
              <span class="label">司机餐补</span>
              <span class="content">12.00元/餐</span>
            </flexbox-item>
          </flexbox>
          <flexbox :gutter="15" class="plan-item">
            <flexbox-item>
              <span class="label">超公里价</span>
              <span class="content">{{5}}元/公里</span>
            </flexbox-item>
            <flexbox-item>
              <span class="label">住宿费用</span>
              <span class="content">{{1}}元</span>
            </flexbox-item>
          </flexbox>
          <flexbox :gutter="15" class="plan-item">
            <flexbox-item>
              <span class="label">超时费用</span>
              <span class="content">12元/小时</span>
            </flexbox-item>
            <flexbox-item>
              <span class="label">其他备注</span>
              <span class="content">不需要发票</span>
            </flexbox-item>
          </flexbox>
        </div>
      </div>

      <div class="card card-contact">
        <div class="header">
          <div class="left">
            <span class="icon iconfont">&#xe613;</span>现场联系人
          </div>
          <div class="right" @click="openBottomBar">
            添加 <span class="icon iconfont">&#xe78b;</span>
          </div>
        </div>
        <div class="body">
          <div class="contact-people-item"
               v-for="(people, index) in contactPeopleList"
               :key="index">
            <div class="left">姓名 {{people.name}}</div>
            <div class="right">
              <span class="phone">手机号码 {{people.phone}}</span>
              <span class="icon iconfont"
                    @click="openConfirmModal(index)">&#xe62a;</span>
            </div>
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

      <div class="card card-usercar-info">
        <div class="header">
          <span class="icon iconfont">&#xe612;</span>用车信息
        </div>
        <div class="body">
          11月20号上午十点，到下午天行车路线：上海市-淮南市
        </div>
      </div>

      <div class="card card-travel-way"
           v-for="(item, index) in travalList"
           :key="index">
        <div class="header">
          <span class="icon iconfont">&#xe64b;</span>第{{index+1}}天行车路线：上海市-淮南市
        </div>

        <div class="body">
          <div class="point-item"
               v-for="(point, index2) in item.pointList"
               :key="index2">
            <span class="travel-length" v-if="point.length">约<br>{{point.length}}<br>千米</span>
            <span class="travel-length" v-else></span>

            <span class="point point-start" v-if="index2 == 0">起</span>
            <span class="point point-end" v-else-if="index2 == item.pointList.length - 1">止</span>
            <span class="point point-between" v-else></span>

            <span class="content">{{point.pointText}}</span>
          </div>
        </div>

        <div class="total-length">总里程约：555.00KM</div>
        <div class="total-time text-danger">用车时间：2018-01-31 21:00</div>
      </div>

      <flexbox :gutter="30" class="btn-wrap">
        <flexbox-item>
          <x-button disabled>订单已取消</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary">返回抢单列表</x-button>
        </flexbox-item>
      </flexbox>
    </div>

    <div v-transfer-dom>
      <popup v-model="showPopUp" class="pop-up" position="bottom" max-height="50%">
        <div class="top">
          <div class="left" @click="showPopUp = false">取消</div>
          <div class="right text-danger" @click="addContactPeople">确定</div>
        </div>

        <div class="popup-form">
          <div class="form-item">
            <span class="icon iconfont">&#xe63e;</span><input type="text" v-model="contactPeopleName">
          </div>
          <div class="form-item">
            <span class="icon iconfont">&#xe600;</span><input type="number" v-model="contactPeoplePhone">
          </div>

          <div class="btn" @click="addContactPeople">
            <span class="icon iconfont text-danger">&#xe610;</span>添加更多联系人
          </div>
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <confirm v-model="showConfirmModal"
               title="提示"
               @on-confirm="removeContactPeopleItem">
        <p style="text-align:center;">确定删除该联系人吗？</p>
      </confirm>
    </div>
  </div>
</template>

<script>

  import {XHeader, Box, TransferDom, XButton, Group, Cell, Flexbox, FlexboxItem, Rater, Popup, Confirm} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader, XButton, Box, Group, Cell, Flexbox, FlexboxItem, Rater, Popup, Confirm
    },

    computed: {},

    mounted() {
      this.getData()
    },

    data() {
      return {
        showConfirmModal: false,
        selectedIndex: '',
        showPopUp: false,
        contactPeopleName: '',
        contactPeoplePhone: '',
        contactPeopleList: [{
          name: 'jack',
          phone: '18768143322'
        }],

        travalList: [{
          pointList: [{
            pointText: '上海市浦东新区到2号机场上海市浦东新区到2号机场上海市浦东新区到2号机场上海市浦东新区到2号机场',
            length: '567'
          }, {
            pointText: '杭州西湖文化广场',
            length: '331'
          }, {
            pointText: '绍兴市鱼米水乡',
            length: '131'
          }, {
            pointText: '上虞小镇火车站洞口'
          }]
        }, {
          pointList: [{
            pointText: '上海市浦东东新区到2号机场上海市浦东新区到2号机场',
            length: '567'
          }, {
            pointText: '杭州西湖文化广场',
            length: '331'
          }, {
            pointText: '上虞小镇火车站洞口'
          }]
        }, {
          pointList: [{
            pointText: '上海市浦东新号机场上海市浦东新区到2号机场',
            length: '567'
          }, {
            pointText: '上虞小镇火车站洞口'
          }]
        }]
      }
    },
    methods: {
      getData() {

      },

      openBottomBar() {
        this.showPopUp = true
      },

      addContactPeople() {
        // TODO valid form
        this.contactPeopleList.push({
          name: this.contactPeopleName,
          phone: this.contactPeoplePhone
        })

        this.contactPeopleName = ''
        this.contactPeoplePhone = ''
      },

      openConfirmModal(index) {
        this.selectedIndex = index
        this.showConfirmModal = true
      },

      removeContactPeopleItem() {
        this.contactPeopleList.splice(this.selectedIndex, 1)
        this.selectedIndex = ''
      },
    }
  }
</script>

<style lang="less">
  @import './OrderDetailPage';
</style>
