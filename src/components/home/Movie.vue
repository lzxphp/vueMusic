<template>
    <div>
      <NavBar>
        <div slot="middle">MV视频</div>
        <div slot="right">
          <router-link to="/Search"><van-icon name="search" size="25px" color="#F8FBF8"/></router-link></div>
      </NavBar>
      <van-row type="flex" justify="space-around">
        <van-col span="11" v-for="(item,index) in movielist" :key="index" @click="playmv(item.id)" class="recom">
            <van-image
              fit="fill"
              width="100%"
              height="6rem"
              class="imgradius"
              :src="item.cover"
            />
            <h5>{{item.name}}</h5>  
            <van-tag round type="primary" class="palycount">
                <van-icon name="audio" sieze="10px"/>{{item.playCount | changenum}}
            </van-tag>
        </van-col>
      </van-row>
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../common/NavBar'
import {_dateFormat} from '../../utils/dateFormat'
export default {
    data() {
      return {
        movielist:'',
        mvcommentCount:'',
        mvlikedCount:'',
        mvshareCount:''

      }
    },
    components:{
      NavBar,
    },
    created() { 
        axios({
            url:'https://autumnfish.cn/mv/exclusive/rcmd?limit=10',
        }).then(res =>{
            this.movielist = res.data.data
        })

    },
    methods:{
      playmv(id) {
        this.$router.push({
          path:'/PlayMovie',
          query:{
            id:id
          }
        })
      }
    },
    filters: { 
      changenum(num) {
        if (num >= 100000000) {
              num = Math.round(num / 10000000) / 10 + '亿'
          } else if (num >= 10000) {
              num = Math.round(num / 1000) / 10 + '万'
          }
            return num;
      } , 
        //格式化后台传过来的时间戳
      dateFormat(time) {
        let date = new Date(time);
        return _dateFormat(date,'yyyy/MM/dd hh:mm')
      }
  },
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.video{
  width: 100%;
  height: 250px;
}
.recom{
  margin-top: 6px;
  background: white;
  position:relative;
}
.palycount{
  position:absolute;
  left: 5px;
  top: 5px;
} 
</style>