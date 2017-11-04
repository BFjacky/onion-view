import Vue from 'vue'
import Router from 'vue-router'
import schedule from '@/components/schedule'
import homepage from '@/components/home/homepage'
import whether from '@/components/whether'
import login from '@/components/login'
import { ToastPlugin, LoadingPlugin } from 'vux'
Vue.use(ToastPlugin);
Vue.use(Router);
Vue.use(LoadingPlugin)
export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'homepage',
      component: homepage,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule
    },
    {
      path: '/whether',
      name: 'whether',
      component: whether,
    },
    {
      path: '/',
      name: 'login',
      component: login,
    }
  ]
})
