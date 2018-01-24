<template>
  <div class="hello">
    <x-header :left-options="{backText: ''}">Bar</x-header>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, cupiditate ducimus est fugiat harum maxime officia quidem. Delectus deserunt harum id iste molestias odio odit sed tempore temporibus. Ipsam, odio!
  </div>
</template>

<script>
  import {XHeader} from 'vux'

  export default {
    components: {
      XHeader
    },
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Bar'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
