import Vue from 'vue'
import Router from 'vue-router'
// 使用路由懒加载
const Home = () => import('@/components/home/Home')
const Singer = () => import('@/components/singer/Singer')
const Rank = () => import('@/components/musiclist/Rank')
const Category = () => import('@/components/Category/Category')
const Search = () => import('@/components/common/Search')
const MusicList = () => import('@/components/singer/MusicList')
const PlayMusic = () => import('@/components/common/PlayMusic')
const MusicSheetList = () => import('@/components/musiclist/MusicSheetList')
const RecomMusic = () => import('@/components/home/RecomMusic')
const HotList = () => import('@/components/home/HotList')
const ArtRank = () => import('@/components/home/ArtRank')
const Movie = () => import('@/components/home/Movie')
const PlayMovie = () => import('@/components/common/PlayMovie')
const RankMv = () => import('@/components/home/RankMv')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        navShow: true, // true显示，false隐藏
      }
    },
    {
      path: '/Singer',
      name: 'Singer',
      component: Singer,
      meta: {
        navShow: true, // true显示，false隐藏
      }
    },
    {
      path: '/Rank',
      name: 'Rank',
      component: Rank,
      meta: {
        navShow: true, // true显示，false隐藏
      }
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category,
      meta: {
        navShow: true, // true显示，false隐藏
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/MusicList',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/PlayMusic',
      name: 'PlayMusic',
      component: PlayMusic
    },
    {
      path: '/MusicSheetList',
      name: 'MusicSheetList',
      component: MusicSheetList
    },
    {
      path: '/RecomMusic',
      name: 'RecomMusic',
      component:RecomMusic
    },
    {
      path: '/HotList',
      name: 'HotList',
      component:HotList
    },
    {
      path: '/ArtRank',
      name: 'ArtRank',
      component:ArtRank
    },
    {
      path: '/Movie',
      name: 'Movie',
      component:Movie
    },
    {
      path: '/PlayMovie',
      name: 'PlayMovie',
      component:PlayMovie
    },
    {
      path: '/RankMv',
      name: 'RankMv',
      component:RankMv
    },
  ]
})
