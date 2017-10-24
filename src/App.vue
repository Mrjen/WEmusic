<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- hello world -->


    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>

  </div>
</template>

<script>
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'
export default {
  name: 'app',
  components:{
    MHeader,
    Tab
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

#app {
  text-align: center;
  font-size: .3rem;
  background: #2D2D2D;
}
</style>
