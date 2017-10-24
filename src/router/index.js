import Vue from 'vue'
import Router from 'vue-router'
import Reacommend from '../components/reacommend/recommend'
import Singer from '../components/singer/singer'
import Rank from '../components/rank/rank'
import Search from '../components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'Reacommend',
      component: Reacommend
    },{
      path: '/singer',
      name: 'Singer',
      component: Singer
    },{
      path: '/rank',
      name: 'Rank',
      component: Rank
    },{
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
