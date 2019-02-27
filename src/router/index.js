import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import CBA from '@/pages/cba'
import football from '@/pages/football'
import game from '@/pages/game'
import walkStreet from '@/pages/walkStreet'
import community from '@/pages/community'
import login from '@/pages/login'
import register from '@/pages/register'
import news from '@/pages/news'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/CBA',
      name: 'CBA',
      component: CBA
    },
    {
      path: '/football',
      name: 'football',
      component: football
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path:'/walkStreet',
      name:'walkStreet',
      component:walkStreet
    },
    {
      path:'/community',
      name:'community',
      component:community
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/news',
      name:'news',
      component:news
    }
  ]
})
