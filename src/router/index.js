import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '@/components/loginPage'
import loginBox from '@/components/loginBox'
import background from '@/components/background'
import schedule from '@/components/schedule'
import scheHeader from '@/components/scheHeader'
import course from '@/components/course'
import detailLog from '@/components/detailLog'
import homepage from '@/components/home/homepage'
import slider from '@/components/sliderDemo.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'schedule',
      component: schedule,
    },
    {
      path: '/login',
      name: 'loginPage',
      component: loginPage,
    },
    {
      path: '/log',
      name: 'detailLog',
      component: detailLog,
    },
    {
      path: '/home',
      name:'homepage',
      component: homepage
    },
    {
      path:'/slider',
      name:'slider',
      component: slider
    }
  ]
})
