<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from '~/components/HelloWorld'

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    handler() {
      console.log(this.message)
      this.message += '!'
    }
  }
}
</script>

<style lang="scss">
@import "./node_modules/bootstrap/scss/functions";
@import "./node_modules/bootstrap/scss/variables";
@import "./node_modules/bootstrap/scss/mixins";
@import "./node_modules/bootstrap/scss/root";
// 
@import "./node_modules/bootstrap/scss/bootstrap";
body{
  background-color: #333;
}
</style>