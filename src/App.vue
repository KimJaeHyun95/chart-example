<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <a href="/1" class="mg-r-10">1</a>
    <a href="/2" class="mg-r-10">2</a>
    <a href="/3" class="mg-r-10">3</a>
    <a href="/4" class="mg-r-10">4</a>
  </div>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.mg-r-10 {
  margin-right: 10px;
}
</style>
