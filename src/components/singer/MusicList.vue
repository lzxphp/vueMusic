<template>
    <div>
        <!-- <Loading /> -->
        <NavBar>
            <div slot="middle">歌曲列表</div>
        </NavBar>
        <div v-if="loadingtip">
            <van-row type="flex" justify="center" class="loading">
            <van-col>
                <van-loading type="spinner" color="#1989fa" size="24px">加载中...</van-loading>
            </van-col>
            </van-row>
        </div>
        <div v-else>
            <van-image
            fit="fill"
            width="100%"
            height="18rem"
            :src="avatarbg"
            >
                <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                </template>
            </van-image>
            <van-cell v-for="(item,index) in musiclist" :key="index"  @click="play(item.id)" class="musiclist">
                <h4>{{index+1}} {{ item.name }}</h4>
                <span v-for="(data,index) in item.ar" :key="index" class="author">
                    {{data.name}}
                </span>  
            </van-cell>
        </div>  
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../common/NavBar'
export default {
    name:"MusicList",
    data() {
      return {
        artid: this.$route.query.id,
        avatarbg:this.$route.query.avatar,
        musiclist:'',
        loadingtip:true
      }
    },
    components:{
        NavBar,
        Loading
    },
    mounted() {
        setTimeout(() => {
            this.loadingtip = false
        }, 1000);
    },
    created() {
        axios({
            // 歌手全部歌曲 带limit
            // order : hot ,time
            url:'https://autumnfish.cn/artist/songs',
            params:{
                id:this.artid,
                limit:20
            }
        }).then(res =>{
            this.musiclist = res.data.songs
        
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
.loading{
  margin: 50% auto; 
}
.avatarbg{
    width: 100%;
    height: 220px;
}
.musiclist{
    border-bottom: 1px solid  #f5f5f5;
}
.author{
    margin-left: 10px;
}
</style>