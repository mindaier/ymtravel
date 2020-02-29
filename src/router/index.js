import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home'
import Detail from '@/detail/Detail'
import City from '@/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
