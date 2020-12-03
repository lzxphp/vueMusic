<template>
    <div>
        <van-row type="flex" justify="center" class="navbar">
            <van-col span="4">
                <div class="left">
                    <!-- 设置左侧默认的显示和功能 -->
                    <slot name="left"><van-icon name="arrow-left" size="20px" @click="onClickLeft"/></slot>
                    </div>  
            </van-col>
            <van-col span="14">
                <h4 class="middle">
                    <slot name="middle"></slot></h4>   
            </van-col>
            <van-col span="4">
                <div class="right">
                    <slot name="right"></slot></div>  
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    data() {
      return {

      }
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.navbar{
    font-size: 1.2em;
    height: 38px;
    vertical-align: middle;
    background: #16AAEC;
    color: white;
    padding-top: 12px;
}
.left{
    /* margin-top: 2px; */
    font-weight: bolder;
}
.left-bars{
    font-weight: bolder;
}
.middle{
    color: white;
    text-align: center;
}
.right{
    /* margin-top: px; */
    float: right;
    color: white;
}
.right a{
    color: white;
}
</style>