<template>
    <div class="rank">
      <NavBar>
          <div slot="middle">歌手排行榜</div>
          <div slot="right">
            <router-link to="/Search"><van-icon name="search" size="25px" color="#F8FBF8"/></router-link>
          </div>
      </NavBar>
      <van-row gutter="30" v-for="(item,index) in artrank" :key="index" @click="getartistid(item.id,item.picUrl)" class="artlist">
          <van-col span="4" offset="1">
              <van-image
              fit="fill"
              width="4rem"
              height="4rem"
              round
              :src="item.picUrl"
              />
          </van-col>
          <van-col span="10">
              <h4 class="mt" :class="{top3:index < 3}">
                {{index+1}}.  {{ item.name }} </h4>

          </van-col>
          <van-col span="9">
              <p class="mt"><van-icon name="chart-trending-o" size="20"/>{{item.score}}</p>
          </van-col>
      </van-row> 
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../common/NavBar'
export default {
    data() {
      return {
        artrank:'',
      }
    },
    components:{
        NavBar,
    },
    created() {
        // 歌手榜单
        axios({
            url:'https://autumnfish.cn/toplist/artist',
            params:{
                limit:10,
            }
        }).then(res =>{
            this.artrank = res.data.list.artists
        })
    },
    filters: {   
      changenum(num) {
        if (num >= 100000000) {
            num = Math.round(num / 10000000) / 10 + '亿'
        } else if (num >= 10000) {
            num = Math.round(num / 1000) / 10 + '万'
        }
          return num;
      }
    },
    methods:{  
      getartistid(id,avatar) {
            this.$router.push({
            path:'/MusicList',
            query:{
                  id:id,
                  avatar:avatar
            }
          })
      }
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

.listitem{
  margin-top: 5px;
  border-bottom: 3px solid #edeff0;
}
.mt{
  margin-top: 5px;
}
.listInfo{
  color:#6F7880;
  margin-top: 20px;
}
.palycount{
  font-size: 14px;
  margin-top: 2px;
}
.counticon{
  position: relative;
  top: 3px;
  margin-right: 2px;
  
}
.top3{
    color: #EF3020;
}
.mt{
    margin-top: 20px;
}
</style>