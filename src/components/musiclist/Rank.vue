<template>
    <div class="rank">
      <NavBar>
        <div slot="left"></div>
        <div slot="middle">精品歌单</div>
      </NavBar>
      <div v-if="loadingtip">
        <van-row type="flex" justify="center" class="loading">
          <van-col>
            <van-loading type="spinner" color="#1989fa" size="24px">加载中...</van-loading>
          </van-col>
        </van-row>
      </div>
      <div v-else>
        <div v-for="(item,index) in ranklist" :key="index" class="listitem" @click="getList(item.id,item.name)">
          <van-row>
             <van-col span="6" offset="1">
               <van-image
                fit="fill"
                width="5rem"
                height="5rem"
                :src="item.coverImgUrl"
                />
              </van-col>  
              <van-col span="14">
                <h4>{{item.name}} </h4>
                <div class="van-multi-ellipsis--l2">
                  {{item.description}}
                </div>
                <van-tag type="primary" mark class="palycount">
                  <van-icon name="play" sieze="10px"/>{{item.playCount | changenum}}
                </van-tag>
              </van-col>
          </van-row>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../common/NavBar'
export default {
    data() {
      return {
        ranklist:'',
        loadingTip:false,
        ranklistdetail:'',
        loadingtip:true
      }
    },
    components:{
        NavBar,
    },
    created() {
      axios({
            url:'https://autumnfish.cn/toplist?limit=10'
        }).then(res =>{
            this.ranklist = res.data.list
      })
    },
    mounted() {
      setTimeout(() => {
          this.loadingtip = false
      }, 2000);
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
      getList(id) {
        this.$router.push({
          path:'/MusicSheetList',
          query:{
            id:id,
            sheetname:name
          }
        })		
      }
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.rank{
  margin-bottom: 50px;
}
.loading{
  margin: 50% auto; 
}
.listitem{
  margin-top: 5px;
  border-bottom: 3px solid #edeff0;
}
.listInfo{
  color:#6F7880;
  margin-top: 20px;
}
.palycount{
  color: white;

  font-size: 12px;
  margin-top: 2px;
}

</style>