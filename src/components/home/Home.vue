<template>
  <div>
    <div v-if="loadingtip">
        <van-row  type="flex" justify="center" class="loading">
          <van-col>
            <van-loading type="spinner" color="#1989fa" size="24px">加载中...</van-loading>
          </van-col>
        </van-row>
    </div>
    <div class="home" v-else>
      <NavBar>
        <div slot="left"><van-icon name="manager" size="22" @click="showpopup" /></div>
        <div slot="middle">云音乐</div>
        <div slot="right">
          <router-link to="/Search"><van-icon name="search" size="25px" color="#F8FBF8"/></router-link></div>
      </NavBar>
      <van-popup v-model="showside" position="left" :style="{ height: '100%' ,width:'70%'}">
      <van-row>
        <van-col span="4" offset="2">
          <van-image
          fit="fill"
          width="2rem"
          height="2rem"
          class="radi"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </van-col>
        <van-col span="18">
        <van-cell title="仿网易云音乐" icon="music-o" is-link/></van-col>
      </van-row>
      <van-cell title="我的喜欢" icon="music-o" is-link value="development"/>
      <van-cell title="MV收藏" icon="star-o" is-link value="development"/>
      <van-cell title="历史记录" icon="records" is-link value="development"/>
      <van-cell title="关于" icon="warning-o" is-link  value="development"/>
      <van-cell title="帮助反馈" icon="question-o" is-link value="development"/>

      <van-cell-group title="其他">
        <van-cell title="设置" value="development" />
      </van-cell-group>
    </van-popup>
    <van-swipe :autoplay="3000" indicator-color="#25B8F8">
      <van-swipe-item v-for="(item,index) in banners" :key="index">
        <van-image
        fit="fill"
        width="100%"
        height="13rem"
        :src="item.pic"
        @click="play(item.song.id)"
        />
        <van-tag class="typetitle" mark type="primary" size="medium">{{item.typeTitle}}</van-tag>
      </van-swipe-item>
    </van-swipe>
    <van-grid  :column-num="3" clickable center class="gridborder">
      <van-grid-item to="/RecomMusic">
        <van-icon name="good-job-o" color="#53B6EF " size="30"/>每日推荐</van-grid-item>
      <van-grid-item to="/ArtRank">
        <van-icon name="medal-o" color="#53B6EF " size="30"/>歌手榜单</van-grid-item>
      <van-grid-item to="/HotList">
        <van-icon name="flag-o" color="#53B6EF " size="30"/>飙升榜单</van-grid-item>
      <van-grid-item to="/Movie">
        <van-icon name="tv-o" color="#53B6EF " size="30"/>网易出品</van-grid-item>
            <van-grid-item to="/RankMv">
      <van-icon name="video-o" color="#53B6EF " size="30"/>MV排行榜</van-grid-item>
      <van-grid-item to="/"  @click="logtip">
        <van-icon name="more-o" color="#53B6EF " size="30"/>更多</van-grid-item>
    </van-grid>
    <van-tabs
      v-model="active"
      sticky
      animated
      duration="0.6"
      line-width="60"
      title-style="font-weight:bolder"
      color="#16AAEC"
      title-active-color="#16AAEC"
    >
      <van-tab title="推荐歌单" dot>
        <van-row type="flex" justify="space-around">
          <van-col span="11" v-for="(item,index) in recomlist" :key="index" @click="getList(item.id,item.name)" class="recom">
              <van-image
                fit="fill"
                width="100%"
                height="6rem"
                class="imgradius"
                :src="item.picUrl"
              />
              <h5>{{item.name}}</h5>  
              <p class="time"><van-icon name="clock-o" class="timeicon"/>{{item.trackNumberUpdateTime | dateFormat}}</p>
              <van-tag round type="primary" class="palycount">
                  <van-icon name="audio" sieze="10px"/>{{item.playCount | changenum}}
              </van-tag>
          </van-col>
        </van-row>
      </van-tab>
       <van-tab title="网友精选碟" badge="10">
        <van-row>
          <van-col span="24">
            <div v-for="(item,index) in musicsum" :key="index" class="listitem" @click="getList(item.id,item.name)">
              <van-row >
                <van-col span="5" offset="1" class="">
                  <van-image
                    fit="fill"
                    width="5rem"
                    height="5rem"
                    class="coverradius"
                    :src="item.coverImgUrl"
                    />
                  </van-col>
                  <van-col span="17" offset="1">
                    <h4>{{item.name}}</h4>
                    <p class="listInfo">
                      <van-icon name="audio" sieze="20" class="counticon"/>{{item.playCount | changenum}}
                      <span class="tag">{{item.tags.join(" / ")}}</span>
                    </p>
                  </van-col>
              </van-row>
            </div>
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../common/NavBar'
import {_dateFormat} from '../../utils/dateFormat'
import { Notify } from 'vant';
export default {
  name: 'Recommend',
  data () {
    return {
      banners:'',
      musicsum:'',
      recommend:'',
      visible:false,
      active:0,
      recomlist:'',
      showside:false,
      loadingtip:true,
      text:''
    }
  },
  components:{
    NavBar,
  },
  created() { 
       // 获取轮播图
        axios({
             url:'https://autumnfish.cn/banner?type=1',
        }).then(res =>{
            this.banners = res.data.banners
        })

        // 歌单 ( 网友精选碟 )
        axios({
            url:'https://autumnfish.cn/top/playlist',
            params:{
              cat: '华语',
              limit:10
            }
        }).then(res =>{
            this.musicsum = res.data.playlists
        })

        // 获取推荐歌单
        axios({
              url:'https://autumnfish.cn/personalized?limit=10'
          }).then(res =>{
              this.recomlist = res.data.result
        })

        // 每日随机一言
        axios({
             url:'https://api.66mz8.com/api/quotation.php?format=json',
        }).then(res =>{
            this.text = res.data.quotation
               // 主要通知
        Notify({ 
              type: 'primary',
              message: this.text,
              duration:'3000',
              background:'rgb(68, 70, 70 ,0.5)',
              className:'Notify'
        });         

        })
        
  },
  mounted() {
    setTimeout(() => {
        this.loadingtip = false
    }, 2000);
  },
  methods:{
    getList(id,name) {
      // console.log(id);
      this.$router.push({
				path:'/MusicSheetList',
				query:{
          id:id,
          sheetname:name
				}
			})
    },
    play(id) {
      this.$router.push({
				path:'/PlayMusic',
				query:{
          id:id,
				}
      })
    },
    showpopup(){
      this.showside = !this.showside
    },
    logtip() {
      Notify({ 
          type: 'primary',
          message: '待后续开发，敬请期待！',
          duration:'2000',
          background:'rgb(68, 70, 70 ,0.5)',
      });   
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
.typetitle{
  position: absolute;
  left: 0;
  bottom: 10px;
  z-index: 1;
}
.loading{
  margin: 50% auto; 
}
.home{
  margin-bottom: 60px;
  background: #F1F3F3;

}
.coverradius{
  border-radius:5px ;
}
.gridborder{
  border-top: 5px solid #f5f5f5;
  border-bottom: 5px solid #f5f5f5;
}
.listitem{
  background: white;
  margin-top: 6px;
  padding: 5px 2px;
}
.listInfo{
  color:#6F7880;
  margin-top: 20px;
}
.tag{
  color:#6F7880;
  margin-right: 15px;
  float: right;
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
