webpackJsonp([1],{DAeh:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("C6wW"),r=n.n(e),s={data:function(){return{rankmv:""}},components:{NavBar:n("SJeo").a},created:function(){var t=this;r()({url:"https://autumnfish.cn/top/mv?limit=10"}).then(function(a){t.rankmv=a.data.data})},methods:{playmv:function(t){this.$router.push({path:"/PlayMovie",query:{id:t}})}},filters:{changenum:function(t){return t>=1e8?t=Math.round(t/1e7)/10+"亿":t>=1e4&&(t=Math.round(t/1e3)/10+"万"),t},dateFormat:function(t){var a=new Date(t);return _dateFormat(a,"yyyy/MM/dd hh:mm")}}},o={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("NavBar",[n("div",{attrs:{slot:"middle"},slot:"middle"},[t._v("Mv排行榜")])]),t._v(" "),n("van-row",[n("van-col",{attrs:{span:"24"}},t._l(t.rankmv,function(a,e){return n("div",{key:e,staticClass:"listitem",on:{click:function(n){return t.playmv(a.id)}}},[n("van-row",[n("van-col",{attrs:{span:"5",offset:"1"}},[n("van-image",{staticClass:"coverradius",attrs:{fit:"fill",width:"5rem",height:"5rem",src:a.cover}})],1),t._v(" "),n("van-col",{attrs:{span:"17",offset:"1"}},[n("h4",[t._v(t._s(e+1)+" "+t._s(a.name))]),t._v(" "),n("p",{staticClass:"listInfo"},[n("van-icon",{staticClass:"counticon",attrs:{name:"audio",sieze:"20"}}),t._v(t._s(t._f("changenum")(a.playCount))+"\n                  "),n("span",{staticClass:"tag"},[n("van-icon",{attrs:{name:"flag-o",size:"20",color:"red"}}),t._v(t._s(a.score))],1)],1)])],1)],1)}),0)],1)],1)},staticRenderFns:[]};var i=n("C7Lr")(s,o,!1,function(t){n("mLoz")},"data-v-fd1357ee",null);a.default=i.exports},mLoz:function(t,a){}});
//# sourceMappingURL=1.88a3110533ea66658c08.js.map