import Vue from 'vue'
import Router from 'vue-router'
// 引入模版，前面别名，后面路径
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import TabelTest from '@/components/TabelTest'
import AxiosTest from '@/components/AxiosTest'
import BookKeeping from '@/bookKeeping/index'
import LayoutTest  from '@/components/El-layoutTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // 模版路径配置的别名
      component: HelloWorld
    },{
      path: '/about',
      name: 'about',
      component: About
    },{
      path: '/table',
      name: 'table',
      component: TabelTest
    },{
      path: '/axios',
      name: 'axios',
      component: AxiosTest
    },{
      path: '/bookKeeping',
      name: 'BookKeeping',
      component: BookKeeping
    },{
      path: '/layoutTest',
      name: 'LayoutTest',
      component: LayoutTest
    }
  ]
})
