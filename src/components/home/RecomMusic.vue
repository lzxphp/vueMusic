<template>
    <div>
        <NavBar>
          <div slot="middle">每日推荐</div>
          <div slot="right"><van-icon name="share" @click="showShare = true"/></div>
        </NavBar>
        <van-cell v-for="(item,index) in RecomMusic" :key="index" @click="play(item.id)">
            <h3>{{index+1}} {{item.name}} </h3> 
            <span v-for="(data,index) in item.song.artists" :key="index" class="author">
                {{data.name}}
            </span>
        </van-cell>
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../common/NavBar'
export default {
    data() {
      return {
          RecomMusic:''
      }
    },
    components:{
        NavBar
    },
    created() {
        axios({
             url:'https://autumnfish.cn/personalized/newsong',
        }).then(res =>{                    
            this.RecomMusic = res.data.result
        })
    },
    methods:{
        gosearch() {
            this.$router.push({
                path:'/Search',
            })
        },
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
.author{
    margin-left: 10px;
}
</style>