webpackJsonp([7],{bIPb:function(t,a){},cC3L:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=n("C6wW"),e=n.n(o),s=n("SJeo"),c=n("6bRL"),r={data:function(){return{mvid:this.$route.query.id,playmovie:"",mvcommentCount:"",mvlikedCount:"",mvshareCount:"",comments:"",hotComments:"",comcount:"",hotcomcount:"",active:0}},components:{NavBar:s.a},created:function(){var t=this;e()({url:"https://autumnfish.cn/mv/url",params:{id:this.mvid}}).then(function(a){t.playmovie=a.data.data.url}),e()({url:"https://autumnfish.cn/mv/detail/info",params:{mvid:this.mvid}}).then(function(a){t.mvcommentCount=a.data.commentCount,t.mvlikedCount=a.data.likedCount,t.mvshareCount=a.data.shareCount}),e()({url:"https://autumnfish.cn/comment/mv",params:{id:this.mvid}}).then(function(a){t.comments=a.data.comments,t.comcount=a.data.comments.length,t.hotComments=a.data.hotComments,t.hotcomcount=a.data.hotComments.length})},filters:{dateFormat:function(t){var a=new Date(t);return Object(c.a)(a,"yyyy/MM/dd hh:mm")}}},m={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"playmovie"},[n("NavBar",[n("div",{attrs:{slot:"middle"},slot:"middle"},[t._v("Mv视频")]),t._v(" "),n("div",{attrs:{slot:"right"},slot:"right"},[n("router-link",{attrs:{to:"/Search"}},[n("van-icon",{attrs:{name:"search",size:"25px",color:"#F8FBF8"}})],1)],1)]),t._v(" "),n("video",{staticClass:"video",attrs:{src:t.playmovie,controls:""}}),t._v(" "),n("van-cell",[n("van-row",{attrs:{type:"flex",justify:"space-around"}},[n("van-col",{attrs:{span:"6"}},[n("van-icon",{attrs:{name:"like-o",color:"red"}}),t._v(t._s(t.mvlikedCount))],1),t._v(" "),n("van-col",{attrs:{span:"5"}},[n("van-icon",{attrs:{name:"chat-o"}}),t._v(t._s(t.mvcommentCount))],1),t._v(" "),n("van-col",{attrs:{span:"6"}},[n("van-icon",{attrs:{name:"share-o"}}),t._v(t._s(t.mvshareCount))],1)],1)],1),t._v(" "),n("van-tabs",{model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[n("van-tab",{attrs:{title:"热门评论",badge:t.hotcomcount}},t._l(t.hotComments,function(a,o){return n("van-row",{key:o,staticClass:"commbox"},[n("van-col",{attrs:{span:"4",offset:"1"}},[n("van-image",{attrs:{fit:"fill",width:"3rem",height:"3rem",round:"",src:a.user.avatarUrl}})],1),t._v(" "),n("van-col",{attrs:{span:"18"}},[n("h4",[t._v(t._s(a.user.nickname))]),t._v(" "),n("p",[t._v(t._s(a.content))]),t._v(" "),n("p",[n("van-icon",{attrs:{name:"like",color:"#FC3622"}}),t._v(" "+t._s(a.likedCount)+"     \n                    "),n("span",{staticClass:"timeicon"},[n("van-icon",{attrs:{name:"clock-o"}}),t._v(t._s(t._f("dateFormat")(a.time)))],1)],1)])],1)}),1),t._v(" "),n("van-tab",{attrs:{title:"评论",badge:t.comcount}},t._l(t.comments,function(a,o){return n("van-row",{key:o,staticClass:"commbox"},[n("van-col",{attrs:{span:"4",offset:"1"}},[n("img",{staticClass:"cmavatar",attrs:{src:a.user.avatarUrl,alt:""}})]),t._v(" "),n("van-col",{attrs:{span:"18"}},[n("h4",[t._v(t._s(a.user.nickname))]),t._v(" "),n("p",[t._v(t._s(a.content))]),t._v(" "),n("p",[n("span",{staticClass:"timeicon"},[n("van-icon",{attrs:{name:"clock-o"}}),t._v(t._s(t._f("dateFormat")(a.time)))],1)])])],1)}),1)],1)],1)},staticRenderFns:[]};var i=n("C7Lr")(r,m,!1,function(t){n("bIPb")},"data-v-818ada42",null);a.default=i.exports}});
//# sourceMappingURL=7.ec426bc89d7c680cd124.js.map