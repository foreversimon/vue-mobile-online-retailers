<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  created () {
    this.$store.commit('GET_USER_INFO')
  }
}
</script>

<style>
html,body {
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
