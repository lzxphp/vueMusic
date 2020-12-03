<template>
  <div> 
        <NavBar>
          <div slot="middle">歌曲搜索</div>
        </NavBar>
        <van-search
          v-model="searchkey"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
        <van-row v-if="isshow" type="flex" justify="center">
          <van-cell>热门搜索：</van-cell>
          <van-row>
            <van-col offset="2" span="10" v-for="(item,index) in serchhots" :key="index" @click="getKeywords(item.searchWord)">
              <div class="hotlist">
                  <span :class="{red:index < 3}">{{index+1 }}</span>
                  {{item.searchWord}}<van-icon :name="item.iconUrl" />{{item.id}}
              </div>
            </van-col>
          </van-row>
        </van-row>
        <van-row v-else>
          搜索结果：
          <van-cell v-for="(item,index) in searchinfo" :key="index" @click="goplay(item.id)"> 
              {{index+1}} 
            <span v-for="(data,id) in item.artists" :key="id">
              {{ item.name }}--
              {{data.name}} 
            </span>
          </van-cell>
        </van-row>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from './NavBar'

export default {
    data() {
      return {
        searchkey:'',
        hotKeyid:'',
        serchhots:'',
        isshow:true,
        searchinfo:'',
        visible:false,
        author:''
      }
    },
    components:{
      NavBar
    },
    created() {
        // 获取热搜
        axios({
            url:'https://autumnfish.cn/search/hot/detail',
        }).then(res =>{                    
            this.serchhots = res.data.data
        })

    },
    methods:{
      onSearch() {
        if(this.searchkey == ''){
              Toast('提示内容')
        }else{
            this.isshow = false
            axios({
              url: 'https://autumnfish.cn/search?',
               // 专门正对get请求的参数拼接
              params: {
                keywords: this.searchkey,
                limit: 20
              }
           }).then(res => {
              this.searchinfo = res.data.result.songs
          })
        }
            
      },
      goplay(id) {
        this.$router.push({
          path:'/PlayMusic',
          query:{
            id:id
          }
			  })		
      }
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.hotlist{
  padding: 3px 2px;
}
.red{
  color: red;
  font-weight: bolder;
}
</style>