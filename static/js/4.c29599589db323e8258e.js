webpackJsonp([4],{VvWJ:function(t,e){},wnZB:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("C6wW"),a=i.n(s),r={data:function(){return{sheetid:this.$route.query.id,sheetname:this.$route.query.sheetname,sheettitle:"",sheetlist:"",coverImgUrl:"",visible:!1}},components:{NavBar:i("SJeo").a},mounted:function(){this.visible=!0},created:function(){var t=this;a()({url:"https://autumnfish.cn/playlist/detail",params:{id:this.sheetid}}).then(function(e){t.sheettitle=e.data.playlist.creator.nickname,t.coverImgUrl=e.data.playlist.coverImgUrl,t.sheetlist=e.data.playlist.tracks})},methods:{play:function(t,e){this.$router.push({path:"/PlayMusic",query:{id:t}})}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("NavBar",[i("div",{staticClass:"van-ellipsis",attrs:{slot:"middle"},slot:"middle"},[t._v("歌曲列表")]),t._v(" "),i("div",{attrs:{slot:"right"},slot:"right"},[i("router-link",{attrs:{to:"/Search"}},[i("van-icon",{attrs:{name:"search",size:"25px",color:"#F8FBF8"}})],1)],1)]),t._v(" "),i("van-image",{attrs:{fit:"fill",width:"100%",height:"18rem",src:t.coverImgUrl},scopedSlots:t._u([{key:"loading",fn:function(){return[i("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}])}),t._v(" "),i("transition",{attrs:{name:"van-slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}]},[i("h3",{staticClass:"sheettitle"},[i("van-tag",{attrs:{mark:"",type:"primary",color:"rgb(49, 51, 52,0.5)",size:"large"}},[t._v(t._s(t.sheettitle))])],1)])]),t._v(" "),t._l(t.sheetlist,function(e,s){return i("van-cell",{key:s,on:{click:function(i){return t.play(e.id)}}},[i("h4",[t._v(" "+t._s(s+1)+" "+t._s(e.name))]),t._v(" "),t._l(e.ar,function(e,s){return i("span",{key:s,staticClass:"author"},[t._v("\n            "+t._s(e.name)+"\n        ")])})],2)}),t._v(" "),i("van-divider",[t._v("我是有底线的")])],2)},staticRenderFns:[]};var l=i("C7Lr")(r,n,!1,function(t){i("VvWJ")},"data-v-ddb966c6",null);e.default=l.exports}});
//# sourceMappingURL=4.c29599589db323e8258e.js.map