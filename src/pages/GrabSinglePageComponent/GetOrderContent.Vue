<template>
  <div class="content release-content">
    <h1>已抢订单 here</h1>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi cum facilis ipsa necessitatibus pariatur placeat praesentium tempore ullam.
  </div>
</template>

<script>
  import {XHeader, Box, TransferDom, XButton, Tab, TabItem} from 'vux'

  export default {
    directives: {
      TransferDom,
    },
    components: {
      XHeader, XButton, Box, Tab, TabItem
    },
    data() {
      return {
        name: '李永波',
        phone: '1768***123',
        avatarUrl: '../assets/avatar.png',
        transitionName: '',
        showGrab: true
      }
    },
    methods: {
      toggleView() {
        this.showGrab = !this.showGrab
        console.log(12)
      },

      onItemClick(type) {
        this.$router.push('/' + type)
      },
    }
  }
</script>

<style lang="less">
  @theme-color: #EF5A48;
  @basic-border-color: #D5D5D5;

</style>
