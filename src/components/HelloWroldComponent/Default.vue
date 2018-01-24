<template>
  <div class="hello">
    <x-header :left-options="{backText: ''}">default</x-header>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores excepturi harum laboriosam libero nam non perferendis reiciendis sapiente. Necessitatibus.
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
        msg: 'default'
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
