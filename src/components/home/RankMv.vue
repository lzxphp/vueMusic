<template>
    <div>
        <NavBar>
        <div slot="middle">Mv排行榜</div>
        </NavBar>
        <van-row>
          <van-col span="24">
            <div v-for="(item,index) in rankmv" :key="index" class="listitem" @click="playmv(item.id)">
              <van-row>
                <van-col span="5" offset="1" class="">
                  <van-image
                    fit="fill"
                    width="5rem"
                    height="5rem"
                    class="coverradius"
                    :src="item.cover"
                    />
                  </van-col>
                  <van-col span="17" offset="1">
                    <h4>{{index+1}} {{item.name}}</h4>
                    <p class="listInfo">
                      <van-icon name="audio" sieze="20" class="counticon"/>{{item.playCount | changenum}}
                      <span class="tag"><van-icon name="flag-o" size="20" color="red"/>{{item.score}}</span>
                    </p>
                  </van-col>
              </van-row>
            </div>
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
          rankmv:''
      }
    },
    components:{
        NavBar,
    },
    created() {
          // 每日随机一言
        axios({
             url:'https://autumnfish.cn/top/mv?limit=10',
        }).then(res =>{
            this.rankmv = res.data.data
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
  color:red;
  margin-right: 15px;
  float: right;
}
</style>