<template>
  <div>
    <x-header :left-options="{backText: ''}">快捷登陆</x-header>
  </div>
</template>

<script>
  import {XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Actionsheet,
      ButtonTab,
      ButtonTabItem
    },
    data() {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
      }
    },
    methods: {}
  }
</script>

<style>

</style>
