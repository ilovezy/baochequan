<template>
  <div class="hello">
    <x-header :left-options="{backText: ''}">Foo</x-header>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    bbbbbbbbbbbbbbbbbbbb
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
        msg: 'Foo'
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
