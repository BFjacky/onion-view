import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '@/components/loginPage'
import schedule from '@/components/schedule'
import homepage from '@/components/home/homepage'
Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
    },
    {
      path: '/login',
      name: 'loginPage',
      component: loginPage,
    },
    {
      path: '/schedule',
      name:'schedule',
      component: schedule
    },
  ]
})
