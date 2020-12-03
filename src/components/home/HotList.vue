<template>
    <div>
        <NavBar>
          <div slot="middle">{{hotlistname}}</div>
          <div slot="right">
              <router-link to="/Search"><van-icon name="search" size="25px" color="#F8FBF8"/></router-link></div>
        </NavBar>
        <van-image
          fit="fill"
          width="100%"
          height="15rem"
          :src="hotlistcover"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
        <van-tag mark type="primary" size="large" class="intro">{{hotlistdesc}}</van-tag>
        <van-cell v-for="(item,index) in hotlist" :key="index" @click="play(item.id)">
             {{index+1}} {{item.name}}  <van-icon name="audio" />{{item.dt}}
        </van-cell>

    </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../common/NavBar'
export default {
    data() {
      return {
          hotlist:"",
          hotlistcover:'',
          hotlistname:'',
          hotlistdesc:'',
          hotlistCount:'',
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
        // 获取飙升榜单的音乐列表
        axios({
            url:'https://autumnfish.cn/playlist/detail',
             params:{
                id: 19723756,
            }
        }).then(res =>{                    
            this.hotlistname = res.data.playlist.name
            this.hotlistcover = res.data.playlist.coverImgUrl
            this.hotlistdesc = res.data.playlist.description
            this.hotlistCount = res.data.playlist.playCount
            this.hotlist = res.data.playlist.tracks
        })
    },
    methods:{
        play(id) {
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
.intro{
    position: relative;
    bottom: 40px;
}
</style>