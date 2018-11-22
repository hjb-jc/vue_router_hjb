import Vue from 'vue'
import Router from 'vue-router' //引进

import Login from './views/login.vue'
import Reg from './views/reg.vue'

Vue.use(Router)//注册

//创建路由对象
const router = new Router({
 // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/reg', name: 'reg', component: Reg }
  ]
})

//配置路由对象
/*router.beforeEach((to,from,next) => {
	console.log(${from.path});
});*/

export default router;
