<template>
    <div v-show="$route.meta.navShow" class="mb">
        <van-tabbar v-model="active" active-color="#16AAEC" inactive-color="#000" class="mb">
            <van-tabbar-item icon="wap-home" to="/">推荐</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/Singer">歌手</van-tabbar-item>
            <van-tabbar-item icon="chart-trending-o" to="/Rank">歌单</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/Category">分类</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
      return {
          active: 0
      }
    },
    methods:{

    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>