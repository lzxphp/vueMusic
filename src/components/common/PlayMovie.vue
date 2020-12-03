<template>
    <div class="playmovie">
        <NavBar>
        <div slot="middle">Mv视频</div>
        <div slot="right">
          <router-link to="/Search"><van-icon name="search" size="25px" color="#F8FBF8"/></router-link></div>
        </NavBar>
        <video class="video" :src="playmovie" controls></video>
        <van-cell>
            <van-row type="flex" justify="space-around">
                <van-col span="6"><van-icon name="like-o" color="red"/>{{mvlikedCount}}</van-col>
                <van-col span="5"><van-icon name="chat-o" />{{mvcommentCount}}</van-col>
                <van-col span="6"><van-icon name="share-o" />{{mvshareCount}}</van-col>
            </van-row>
        </van-cell>
        <van-tabs v-model="active">
            <van-tab title="热门评论" :badge="hotcomcount">
                <van-row v-for="(item,index) in hotComments" :key="index" class="commbox">
                    <van-col span="4" offset="1">
                        <van-image
                        fit="fill"
                        width="3rem"
                        height="3rem"
                        round
                        :src="item.user.avatarUrl"
                        />
                      
                    </van-col>
                    <van-col span="18">
                        <h4>{{item.user.nickname}}</h4> 
                        <p>{{item.content}}</p>
                        <p><van-icon name="like" color="#FC3622"/> {{item.likedCount}}     
                        <span class="timeicon"><van-icon name="clock-o" />{{item.time | dateFormat}}</span></p>
                    </van-col>
                </van-row>
            </van-tab>
            <van-tab title="评论" :badge="comcount">
                <van-row v-for="(item,index) in comments" :key="index" class="commbox">
                    <van-col span="4" offset="1">
                        <img :src="item.user.avatarUrl" alt="" class="cmavatar">
                    </van-col>
                    <van-col span="18">
                        <h4>{{item.user.nickname}}</h4> 
                        <p>{{item.content}}</p>
                        <p>   
                        <span class="timeicon"><van-icon name="clock-o" />{{item.time | dateFormat}}</span></p>
                    </van-col>
                </van-row>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from './NavBar'
import {_dateFormat} from '../../utils/dateFormat'
export default {
    data() {
      return {
        mvid:this.$route.query.id,
        playmovie:'',
        mvcommentCount:'',
        mvlikedCount:'',
        mvshareCount:'',
        comments:'',
        hotComments:'',
        comcount:'',
        hotcomcount:'',
        active:0
      }
    },
    components:{
        NavBar,
    },
    created() {
        //播放mv视频
        axios({
            url:'https://autumnfish.cn/mv/url',
            params:{
                id:this.mvid
            }
        }).then(res =>{
            this.playmovie = res.data.data.url
        })
        //  获取mv视频详情信息
        axios({
            url:'https://autumnfish.cn/mv/detail/info',
            params:{
                mvid:this.mvid
            }
        }).then(res =>{
            this.mvcommentCount = res.data.commentCount
            this.mvlikedCount = res.data.likedCount
            this.mvshareCount = res.data.shareCount
        })
        //  获取mv视频评论信息
        axios({
            url:'https://autumnfish.cn/comment/mv',
            params:{
                id:this.mvid
            }
        }).then(res =>{
            this.comments = res.data.comments
            this.comcount = res.data.comments.length
            this.hotComments = res.data.hotComments
            this.hotcomcount = res.data.hotComments.length
        })
       
    },
    filters: {   
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
.video{
  width: 100%;
  height: 250px;
  margin-bottom: -30px;
}
.commbox{
    border-bottom: 4px solid #E8E8E8;
    background: white;
    padding-top:5px ;
}
.cmavatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.timeicon{
    float: right;
}
</style>