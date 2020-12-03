<template>
    <div class="playMusic">
        <NavBar>
            <div slot="middle">播放歌曲</div>
            <div slot="right"><van-icon name="share" @click="showShare = true"/></div>
        </NavBar>
        <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        />
        <transition name="van-slide-right">
            <div v-show="visible">
                <van-row>
                    <van-col span="19" offset="1">
                        <h3>热门评论：</h3>
                    </van-col>
                    <van-col span="4">
                        <p @click="gocoments" class="close">
                            <van-icon name="cross" size="15"/>关闭</p>
                    </van-col>
                </van-row>
                <van-row v-for="(item,index) in commentinfo" :key="index" class="commbox">
                    <van-col span="4" offset="1">
                        <img :src="item.user.avatarUrl" alt="" class="cmavatar">
                    </van-col>
                    <van-col span="18">
                        <h5>{{item.user.nickname}}</h5> 
                        <p>{{item.content}}</p>
                        <p><van-icon name="like" color="#FC3622"/> {{item.likedCount}}     
                        <span class="timeicon"><van-icon name="clock-o" />{{item.time | dateFormat}}</span></p>
                    </van-col>
                </van-row>
            </div>
        </transition>
        <div v-show="isshowplay">
            <van-row type="flex" justify="center" class="playbg">
                <van-col>
                    <div class="coverbox" :class="{playing:isPlaying}">
                        <van-image
                        fit="fill"
                        width="10rem"
                        height="10rem"
                        round 
                        class="coverpicUrl"
                        :src="audio.cover"
                        />
                    </div>              
                </van-col>
            </van-row>
            <div class="audio">
                <van-row type="flex" justify="center" class="like-icon">
                    <van-col span="4" offset="2">
                        <van-icon :name="islike" size="30px" :color="iscolor" @click="getlike"/></van-col>
                    <van-col span="4"> 
                        <van-icon name="comment-o" size="30px" color="#647881" :badge="commentinfo.length" @click="gocoments" /></van-col>
                    <van-col span="4">                  
                        <van-icon name="share-o" size="30px" color="#647881" @click="showShare = true"/></van-col>
                </van-row>         
                <aplayer :audio="audio" :lrcType="1"  @play="play" @pause="pause" />
            </div>
        </div> 
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from './NavBar'
import {_dateFormat} from "../../utils/dateFormat"
export default {
    data() {
      return {
        musicid:this.$route.query.id,
        commentinfo:'',
        islike:'like-o',
        iscolor:'#647881',
        musiccover:'',
        isPlaying:false,
        visible:false,
        isshowplay:true,
        showShare: false,
        options: [
            [
            { name: '微信', icon: 'wechat' },
            { name: '微博', icon: 'weibo' },
            { name: 'QQ', icon: 'qq' },
            ],
            [
            { name: '复制链接', icon: 'link' },
            { name: '分享海报', icon: 'poster' },
            { name: '二维码', icon: 'qrcode' },
            ],
        ],
        audio: {
            name: '',
            artist: '',
            url: '',
            cover: '',
            lrc: '',
        }
       
      }
    },
    components:{
        NavBar
    },
    created() {

         // 获取播放地址
        // console.log( this.musicid)
        axios({
            url:'https://autumnfish.cn/song/url',
            params:{
                id: this.musicid
            }
        }).then(res =>{                    
            // console.log(res)
            this.audio.url = res.data.data[0].url

        })

        // 获取歌曲详情 / 封面
        axios({
            url:'https://autumnfish.cn/song/detail',
            // 专门正对get请求的参数拼接
            params:{
                ids:this.musicid
            }
        }).then(res =>{
            console.log(res)
            // console.log(res.data.songs)
            this.cp = res.data.songs[0].cp
            this.audio.name = res.data.songs[0].name
            this.audio.artist = res.data.songs[0].ar[0].name
            this.audio.cover = res.data.songs[0].al.picUrl
        })
       
        // 获取歌曲歌词
        axios({
            url:'https://autumnfish.cn/lyric',
            // 专门正对get请求的参数拼接
            params:{
                id:this.musicid
            }
        }).then(res =>{
             this.audio.lrc = res.data.lrc.lyric
        })

        // 获取歌曲评论
        axios({
            url: 'https://autumnfish.cn/comment/music?',
            // 专门正对get请求的参数拼接
                params: {
                id: this.musicid,
                limit:12
            }
        }).then(res => {
            this.commentinfo = res.data.hotComments
        })   
    },
    filters: {   
        //格式化后台传过来的时间戳
        dateFormat(time) {
        let date = new Date(time);
        return _dateFormat(date,'yyyy/MM/dd hh:mm')
        }
    },
    methods:{
        gocoments(){	
            this.visible = !this.visible
            this.isshowplay = !this.isshowplay
            
        },
        play() {
            // console.log('ok');
            this.isPlaying = true
        },
        pause() {
            // console.log('stop');
            this.isPlaying = false
        },
        getlike() {
            this.islike = 'like'
            this.iscolor = '#DB3131'
        }
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.playbg{
    height:750px;
    background-size: 100% 100%;
    background-image:url('../../assets/playbg.jpg');
}
.commbox{
    border-bottom: 3px solid #E8E8E8;
}
.cmavatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.timeicon{
    float: right;
}
.coverbox{
    width: 220px;
    height:220px;
    border-radius: 50%;  
    text-align: center;
    background:#272B2D;
    position: relative;
    top: 100px;
}

.coverpicUrl{
    margin-top: 30px;

}
.playing{
    animation:myfirst 10s linear 0s infinite normal;
	/* Firefox: */
	-moz-animation:myfirst 10s linear 0s infinite normal;
	/* Safari and Chrome: */
	-webkit-animation:myfirst 10s linear 0s infinite normal;
	/* Opera: */
	-o-animation:myfirst 10s linear 0s infinite normal;
}
@keyframes myfirst
{
	0%   { transform:rotate(0deg);
	-ms-transform:rotate(0deg); 
	-ms-transform:rotate(0deg); /* IE 9 */
    -webkit-transform:rotate(0deg); /* Safari and Chrome */
    }
    100%{ transform:rotate(360deg);
	-ms-transform:rotate(360deg); 
	-ms-transform:rotate(360deg); /* IE 9 */
    -webkit-transform:rotate(360deg); /* Safari and Chrome */
    }
}
.close{
    margin-top: 2px;
}
.like-icon{
   margin-bottom: 50px;
}
.audio{
    width: 100%;
    position: fixed;
    bottom: 0px;
}

</style>