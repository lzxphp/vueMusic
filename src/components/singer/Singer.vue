<template>
    <div class="single">
        <NavBar>
            <!-- 插槽留空，去掉默认设置的内容， -->
            <div slot="left"></div>
            <div slot="middle">全部歌手</div>
        </NavBar>
        <van-tabs animated duration="0.5" color="#16AAEC" title-active-color="#16AAEC" 
        v-model="activeName" @change="getindex(activeName)">
            <van-tab v-for="(item,index) in letter" :key="index" :title="item" :name="item">
                <van-row gutter="30" v-for="(artist,index) in artists" :key="index" @click="getartistid(artist.id,artist.picUrl)" class="artlist">
                    <van-col span="4" offset="1">
                        <van-image
                        fit="fill"
                        width="4rem"
                        height="4rem"
                        round
                        :src="artist.picUrl"
                        />
                    </van-col>
                    <van-col span="10">
                        <h4 class="mt" :class="{top3:index < 3}">
                            {{ artist.name }} </h4>

                    </van-col>
                </van-row> 
            </van-tab>
        </van-tabs>    
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../common/NavBar'
export default {
    data() {
      return {
        // 显示默认标签
        activeName:'a',
        letter: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        artists:'',
        // 给加载时 设置默认传递的参数
        // param:'a'
      }
    },
    components:{
        NavBar,
    },
    methods:{
        getindex(index){
            // console.log(index)
            this.param = index
            axios({
                url:'https://autumnfish.cn/artist/list',
                params:{
                    area:7,
                    initial:this.param
                }
            }).then(res =>{
                this.artists = res.data.artists
            })

        },
        getartistid(id,avatar) {
            this.$router.push({
            path:'/MusicList',
            query:{
                  id:id,
                  avatar:avatar
            }
          })
        }
    },
    created() {
         axios({
                url:'https://autumnfish.cn/artist/list',
                params:{
                    area:7,
                    initial:this.activeName
                }
            }).then(res =>{
                console.log(res);
                // console.log(res.data.artists)
                this.artists = res.data.artists
            })
    },
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.single{
    margin-bottom: 50px;
}
.artbg{
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
}
.artlist{
  padding: 8px 0 5px 0;
  border-bottom: 2px solid  #f5f5f5;
}
.mt{
    margin-top: 20px;
}
</style>
