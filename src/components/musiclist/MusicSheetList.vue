<template>
    <div>
        <NavBar>
          <div class="van-ellipsis" slot="middle">歌曲列表</div>
          <div slot="right">
            <router-link to="/Search"><van-icon name="search" size="25px" color="#F8FBF8"/></router-link>
          </div>
        </NavBar>
        <van-image
          fit="fill"
          width="100%"
          height="18rem"
          :src="coverImgUrl"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
        <!-- 上滑进入 -->
        <transition name="van-slide-up">
          <div v-show="visible"> 
            <h3 class="sheettitle"><van-tag mark type="primary" color='rgb(49, 51, 52,0.5)' size="large">{{sheettitle}}</van-tag></h3>
          </div>
        </transition>
        <van-cell v-for="(item,index) in sheetlist" :key="index" @click="play(item.id)">
          <h4> {{index+1}} {{item.name}}</h4> 
          <span v-for="(data,index) in item.ar" :key="index" class="author">
                {{data.name}}
            </span>  
        </van-cell>
        <van-divider>我是有底线的</van-divider>
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../common/NavBar'
export default {
    data() {
      return {
        sheetid: this.$route.query.id,
        sheetname: this.$route.query.sheetname,
        sheettitle:'',
        sheetlist:'',
        coverImgUrl:'',
        visible:false
      }
    },
    components:{
        NavBar
    },
    mounted() {
       this.visible = true
    }, 
    created() {
      // 获取歌单详情
        axios({
            url:'https://autumnfish.cn/playlist/detail',
             params:{
                id: this.sheetid,
            }
        }).then(res =>{                    
            this.sheettitle = res.data.playlist.creator.nickname
            this.coverImgUrl = res.data.playlist.coverImgUrl
            this.sheetlist = res.data.playlist.tracks
        })
    },
    methods:{
      play(id,name) {
      this.$router.push({
				path:'/PlayMusic',
				query:{
          id:id,
				}
			})		
    }
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.sheettitle{
  font-size: 18px;
  height:20px;
  position: relative;
  left: 0px;
  bottom: 40px;
}

</style>