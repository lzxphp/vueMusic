<template>
    <div class="Category">
        <NavBar>
            <div slot="left"></div>
            <div slot="middle">歌单分类</div>
        </NavBar>
        <van-tabs animated duration="0.5" color="#16AAEC" title-active-color="#16AAEC" v-model="activeName" @click="getinfo(activeName)">
            <van-tab v-for="(item,index) in hotcate" :key="index" :title="item.name" :name="item.name">
                <van-row type="flex" justify="space-around">
                    <van-col span="11" v-for="(item,index) in catemusic" :key="index" @click="getList(item.id,item.name)" class="cate">
                        <van-image
                            fit="cover"
                            width="100%"
                            height="6rem"
                            class="imgradius"
                            :src="item.coverImgUrl"
                        />
                        <h5>{{item.name}}</h5>  
                        <p class="time"><van-icon name="clock-o" class="timeicon"/>{{item.trackNumberUpdateTime | dateFormat}}</p>
                        <van-tag round type="primary" class="palycount">
                            <van-icon name="audio" sieze="10px"/>{{item.playCount | changenum}}
                        </van-tag>
                    </van-col>
                </van-row> 
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../common/NavBar'
import {_dateFormat} from '../../utils/dateFormat'
export default {
    data() {
      return {
        cateid:'',
        hotcate:'',
        activeName:'',
        catemusic:''
      }
    },
    components:{
        NavBar,
    },
    created() {
        axios({
            url:'https://autumnfish.cn/playlist/catlist',
            // url:'https://autumnfish.cn/playlist/hot',
        }).then(res =>{
            this.hotcate = res.data.sub
            
        })
        this.getinfo()
    },       
    methods:{
        getinfo(activeName){
            console.log(activeName)
            // 获取分类歌单详情
            axios({
                // url:'https://autumnfish.cn/playlist/detail',
                url:'https://autumnfish.cn/top/playlist',
                params:{
                    // id: activeName,
                    cat:activeName,
                    limit:8
                }
            }).then(res =>{                    
                this.catemusic = res.data.playlists
            })
        },
        getList(id) {
        // console.log(id);
        this.$router.push({
          path:'/MusicSheetList',
          query:{
            id:id,      }
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
        }, 
        //格式化后台传过来的时间戳
        dateFormat(time) {
        let date = new Date(time);
        return _dateFormat(date,'yyyy/MM/dd hh:mm')
        }
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.Category{
    margin-bottom: 50px;
    background: #F1F3F3;

}
.cate{
  padding: 3px;
  margin-top: 8px;
  position:relative;
  background: white;
}
.palycount{
  position:absolute;
  right: 5px;
  top: 7px;
} 
.time{
  margin-top:3px;
  font-size: 12px;
  color:#585353;
}
.timeicon{
  position: relative;
  top: 2px;
  margin-right: 3px;
}
</style>