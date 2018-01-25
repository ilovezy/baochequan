<template>
  <div class="content release-content">

    <div class="control-bar">
      <div class="number"></div>
      <select name="" id=""></select>
    </div>

  </div>
</template>

<script>
  import { Box, TransferDom, XButton} from 'vux'

  export default {
    directives: {
      TransferDom,
    },
    components: {
      XButton, Box
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
      onItemClick(type) {
        this.$router.push('/' + type)
      },
    }
  }
</script>

<style lang="less">
  @theme-color: #EF5A48;
  @basic-border-color: #D5D5D5;

  .control-bar {
    background: #fff;
    height: 45px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0 4px #aaa
  }
</style>
