<template>
  <div id="app">
        <!-- 上滑进入 -->
    <transition name="van-fade">
        <router-view />
    </transition>
    <TabBar></TabBar>


  </div>
</template>

<script>
import TabBar from './components/common/TabBar'
export default {
  name: 'App',
  data() {
    return{
      active:1,
    }
  },
  components:{
    TabBar
  }
}
</script>

<style>
#app{
  color:#35393D;
}
h1,h2,h3,h4,h5,h6,p{
  color:#35393D;
  margin: 2px;
}

</style>
