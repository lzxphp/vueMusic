webpackJsonp([2],{"PR+L":function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("C6wW"),n=s.n(i),o=s("SJeo"),e=s("6bRL"),c={data:function(){return{musicid:this.$route.query.id,commentinfo:"",islike:"like-o",iscolor:"#647881",musiccover:"",isPlaying:!1,visible:!1,isshowplay:!0,showShare:!1,options:[[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}]],audio:{name:"",artist:"",url:"",cover:"",lrc:""}}},components:{NavBar:o.a},created:function(){var a=this;n()({url:"https://autumnfish.cn/song/url",params:{id:this.musicid}}).then(function(t){a.audio.url=t.data.data[0].url}),n()({url:"https://autumnfish.cn/song/detail",params:{ids:this.musicid}}).then(function(t){console.log(t),a.cp=t.data.songs[0].cp,a.audio.name=t.data.songs[0].name,a.audio.artist=t.data.songs[0].ar[0].name,a.audio.cover=t.data.songs[0].al.picUrl}),n()({url:"https://autumnfish.cn/lyric",params:{id:this.musicid}}).then(function(t){a.audio.lrc=t.data.lrc.lyric}),n()({url:"https://autumnfish.cn/comment/music?",params:{id:this.musicid,limit:12}}).then(function(t){a.commentinfo=t.data.hotComments})},filters:{dateFormat:function(a){var t=new Date(a);return Object(e.a)(t,"yyyy/MM/dd hh:mm")}},methods:{gocoments:function(){this.visible=!this.visible,this.isshowplay=!this.isshowplay},play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},getlike:function(){this.islike="like",this.iscolor="#DB3131"}}},r={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"playMusic"},[s("NavBar",[s("div",{attrs:{slot:"middle"},slot:"middle"},[a._v("播放歌曲")]),a._v(" "),s("div",{attrs:{slot:"right"},slot:"right"},[s("van-icon",{attrs:{name:"share"},on:{click:function(t){a.showShare=!0}}})],1)]),a._v(" "),s("van-share-sheet",{attrs:{title:"立即分享给好友",options:a.options},model:{value:a.showShare,callback:function(t){a.showShare=t},expression:"showShare"}}),a._v(" "),s("transition",{attrs:{name:"van-slide-right"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:a.visible,expression:"visible"}]},[s("van-row",[s("van-col",{attrs:{span:"19",offset:"1"}},[s("h3",[a._v("热门评论：")])]),a._v(" "),s("van-col",{attrs:{span:"4"}},[s("p",{staticClass:"close",on:{click:a.gocoments}},[s("van-icon",{attrs:{name:"cross",size:"15"}}),a._v("关闭")],1)])],1),a._v(" "),a._l(a.commentinfo,function(t,i){return s("van-row",{key:i,staticClass:"commbox"},[s("van-col",{attrs:{span:"4",offset:"1"}},[s("img",{staticClass:"cmavatar",attrs:{src:t.user.avatarUrl,alt:""}})]),a._v(" "),s("van-col",{attrs:{span:"18"}},[s("h5",[a._v(a._s(t.user.nickname))]),a._v(" "),s("p",[a._v(a._s(t.content))]),a._v(" "),s("p",[s("van-icon",{attrs:{name:"like",color:"#FC3622"}}),a._v(" "+a._s(t.likedCount)+"     \n                    "),s("span",{staticClass:"timeicon"},[s("van-icon",{attrs:{name:"clock-o"}}),a._v(a._s(a._f("dateFormat")(t.time)))],1)],1)])],1)})],2)]),a._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:a.isshowplay,expression:"isshowplay"}]},[s("van-row",{staticClass:"playbg",attrs:{type:"flex",justify:"center"}},[s("van-col",[s("div",{staticClass:"coverbox",class:{playing:a.isPlaying}},[s("van-image",{staticClass:"coverpicUrl",attrs:{fit:"fill",width:"10rem",height:"10rem",round:"",src:a.audio.cover}})],1)])],1),a._v(" "),s("div",{staticClass:"audio"},[s("van-row",{staticClass:"like-icon",attrs:{type:"flex",justify:"center"}},[s("van-col",{attrs:{span:"4",offset:"2"}},[s("van-icon",{attrs:{name:a.islike,size:"30px",color:a.iscolor},on:{click:a.getlike}})],1),a._v(" "),s("van-col",{attrs:{span:"4"}},[s("van-icon",{attrs:{name:"comment-o",size:"30px",color:"#647881",badge:a.commentinfo.length},on:{click:a.gocoments}})],1),a._v(" "),s("van-col",{attrs:{span:"4"}},[s("van-icon",{attrs:{name:"share-o",size:"30px",color:"#647881"},on:{click:function(t){a.showShare=!0}}})],1)],1),a._v(" "),s("aplayer",{attrs:{audio:a.audio,lrcType:1},on:{play:a.play,pause:a.pause}})],1)],1)],1)},staticRenderFns:[]};var l=s("C7Lr")(c,r,!1,function(a){s("f9KV")},"data-v-ea79163e",null);t.default=l.exports},f9KV:function(a,t){}});
//# sourceMappingURL=2.04140fab5f625c089414.js.map