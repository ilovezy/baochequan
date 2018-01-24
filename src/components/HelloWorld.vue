<template>
  <div class="hello">
    <x-header :left-options="{backText: ''}">hell world</x-header>

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link to="/basic/default">Default</router-link>
    <router-link to="/basic/foo">Foo</router-link>
    <router-link to="/basic/bar">Bar</router-link>
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
      msg: 'Welcome to Your Vue.js App'
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
