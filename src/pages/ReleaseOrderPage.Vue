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

      <!--精确发布-->
      <div class="form-wrap" v-if="selectTab == 0">
        <div class="form-panel">
          <div class="form-item form-item-type">
            <div class="label">订单类型</div>
            <div class="content">
              <x-button :type="orderType==1 ? 'primary' : ''" mini
                        @click.native="changeOrderType(1)">竞价
              </x-button>
              <x-button :type="orderType==1 ? '' : 'primary'" mini
                        @click.native="changeOrderType(0)">一口价
              </x-button>
              <div class="text-wrap">
                “竞价模式”是让司机报出价格，如果您有 心理价位，可以选择“一口价”填写价格
              </div>
            </div>
          </div>

          <div class="form-item" v-if="orderType!=1">
            <div class="label text-danger">一口价格</div>
            <div class="content">
              <input type="number" class="form-control" placeholder="单位元">
            </div>
          </div>

          <div class="form-item form-item-double">
            <flexbox>
              <flexbox-item>
                <div class="label">座位数</div>
                <div class="content">
                  <select class="form-control">
                    <option v-for="(item, index) in seatType"
                            :key="index"
                            value="item.type">{{item.text}}
                    </option>
                  </select>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="label">车辆数</div>
                <div class="content">
                  <select class="form-control">
                    <option value="1" v-for="(item, index) in carNumList">{{item}}辆</option>
                  </select>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
        </div>

        <div class="form-panel">
          <div class="form-item form-item-spe">
            <div class="label"><span class="icon iconfont">&#xe613;</span>现场联系人</div>
            <div class="content" @click="openBottomBar">
              添加 <span class="icon iconfont">&#xe78b;</span>
            </div>
          </div>

          <ul class="concat-people-list">
            <li class="people-item"
                v-for="(item, index) in contactPeopleList"
                :key="index">
              <span class="left">姓名：{{item.name}}</span>
              <span class="right">
                手机号：{{item.phone}}
                <span class="iconfont" @click="removeContactPeopleItem(index)">&#xe62a;</span>
              </span>
            </li>
          </ul>
        </div>

        <div class="form-panel"
             v-for="(item, index) in useCarList"
             :key="index">
          <div class="form-item">
            <div class="label">用车时间</div>
            <div class="content">
              <input type="text" class="form-control">
            </div>
          </div>

          <div class="form-item">
            <div class="label">第{{index+1}}天<br>出发地</div>
            <div class="content">
              <input type="text" class="form-control" placeholder="请输入出发地点城市和详细地址">
            </div>
          </div>

          <div class="form-item">
            <div class="label"></div>
            <div class="content">
              <x-button type="primary" @click.native="addPassPoint(item)">
                <span class="icon iconfont">&#xe688;</span> 添加途径点
              </x-button>
            </div>
          </div>

          <div class="form-item form-item-passPoint" v-if="item.passPointList.length > 0">
            <div class="label">途径地</div>
            <div class="content">
              <div class="pass-point-item" v-for="(passPoint, index) in item.passPointList">
                <input type="text"
                       class="form-control"
                       placeholder="请输入出发地点城市和详细地址"
                       v-model="passPoint.value">
                <span class="iconfont" @click="removePassPoint(item, index)">&#xe62a;</span>
              </div>
            </div>
          </div>

          <div class="form-item">
            <div class="label">目的地</div>
            <div class="content">
              <input type="text" class="form-control" placeholder="请输入出发地点城市和详细地址">
            </div>
          </div>

          <div class="form-item from-item-action">
            <div class="label"></div>
            <div class="content">
              <x-button type="primary" @click.native="addUserCarItem">添加次日行程</x-button>
              <x-button type="primary" @click.native="removeUserCarItem(index)">删除此行程</x-button>
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

      <!--简易发布-->
      <div v-else>

        <div class="form-panel">
          <div class="form-item form-item-type">
            <div class="label">订单类型</div>
            <div class="content">
              <x-button :type="orderType==1 ? 'primary' : ''" mini
                        @click.native="changeOrderType(1)">竞价
              </x-button>
              <x-button :type="orderType==1 ? '' : 'primary'" mini
                        @click.native="changeOrderType(0)">一口价
              </x-button>
              <div class="text-wrap">
                “竞价模式”是让司机报出价格，如果您有 心理价位，可以选择“一口价”填写价格
              </div>
            </div>
          </div>

          <div class="form-item" v-if="orderType!=1">
            <div class="label text-danger">一口价格</div>
            <div class="content">
              <input type="number" class="form-control" placeholder="单位元">
            </div>
          </div>
        </div>

        <div class="form-panel">
          <div class="form-item form-item-spe">
            <div class="label"><span class="icon iconfont">&#xe613;</span>现场联系人</div>
            <div class="content" @click="openBottomBar">
              添加 <span class="icon iconfont">&#xe78b;</span>
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

          <div class="form-item form-textarea">
            <textarea class="form-control" placeholder="请输入行程，时间，人数等关键信息"></textarea>
          </div>

          <div class="form-checkboxList">
            <p class="notice">请选择推送的司机类型</p>

            <div class="checklist-container">
              <label class="check-item"
                     v-for="(seat, index) in seatType"
                     :key="index">
                <input type="checkbox" v-model="seat.type"> {{seat.text}}
              </label>
            </div>
            <div class="checklist-container">
              <label class="check-item">
                <input type="checkbox">需要发票
              </label>
            </div>
          </div>
        </div>

        <div class="btn-wrap">
          <x-button type="primary">发布</x-button>
        </div>
      </div>
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
  </div>
</template>

<script>
  import {TransferDom, XHeader, XButton, Tab, TabItem, Sticky, Flexbox, FlexboxItem, Datetime, Group, Popup} from 'vux'
  import index from "../router";

  export default {
    directives: {
      TransferDom,
    },
    components: {
      XHeader, XButton, Tab, TabItem, Sticky, Flexbox, FlexboxItem, Datetime, Group, Popup
    },
    props: {},
    data() {
      return {
        selectTab: 0,
        orderType: 1,
        returnDate: '',
        showPopUp: false,

        contactPeopleName: '',
        contactPeoplePhone: '',
        contactPeopleList: [{
          name: 'jack',
          phone: '18768143322'
        }],
        useCarList: [{
          passPointList: []
        }],

        carNumList: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
        seatType: [{
          type: 1, text: '全选'
        }, {
          type: 2, text: '5座'
        }, {
          type: 3, text: '7座'
        }, {
          type: 4, text: '15座'
        }, {
          type: 5, text: '18-22座'
        }, {
          type: 6, text: '30-37座'
        }, {
          type: 7, text: '53-57座'
        }]
      }
    },
    mounted() {
      console.log(this.cardInfo)
    },
    methods: {
      changeOrderType(type) {
        this.orderType = type
      },
      switchTabItem(index) {
        this.selectTab = index
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

      removeContactPeopleItem(index) {
        this.contactPeopleList.splice(index, 1)
      },

      addUserCarItem() {
        this.useCarList.push({
          passPointList: []
        })
      },

      removeUserCarItem(index) {
        if (index > 0) {
          this.useCarList.splice(index - 1, 1)
        }
      },

      addPassPoint(item) {
        item.passPointList.push({})
      },

      removePassPoint(item, index) {
        item.passPointList.splice(index, 1)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import './ReleaseOrderPage.less';
</style>
