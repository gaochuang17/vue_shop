import Vue from 'vue'
import Router from 'vue-router'
/* import Login from '../components/login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
import Cate from '../components/goods/Cate.vue'
import Params from '../components/goods/Params.vue'
import GoodList from '../components/goods/List.vue'
import Add from '../components/goods/Add.vue'
import Report from '../components/report/Report.vue'
 */

// import Login from '../components/Login.vue'
const Login = () =>
  import(/* webpackChunkName: "login_home_welcome" */ '../components/login.vue')
// import Home from '../components/Home.vue'
const Home = () =>
  import(/* webpackChunkName: "login_home_welcome" */ '../components/Home.vue')
// import Welcome from '../components/Welcome.vue'
const Welcome = () =>
  import(
    /* webpackChunkName: "login_home_welcome" */ '../components/Welcome.vue'
  )

// import Users from '../components/user/Users.vue'
const Users = () =>
  import(
    /* webpackChunkName: "Users_Rights_Roles" */ '../components/user/Users.vue'
  )
// import Rights from '../components/power/Rights.vue'
const Rights = () =>
  import(
    /* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Rights.vue'
  )
// import Roles from '../components/power/Roles.vue'
const Roles = () =>
  import(
    /* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Roles.vue'
  )

// import Cate from '../components/goods/Cate.vue'
const Cate = () =>
  import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Cate.vue')
// import Params from '../components/goods/Params.vue'
const Params = () =>
  import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Params.vue')

// import GoodsList from '../components/goods/List.vue'
const GoodList = () =>
  import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/List.vue')
// import Add from '../components/goods/Add.vue'
const Add = () =>
  import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/Add.vue')

// import Report from '../components/report/Report.vue'
const Report = () =>
  import(/* webpackChunkName: "Report" */ '../components/report/Report.vue')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          component: Welcome
        },
        {
          path: '/users',
          component: Users
        },
        {
          path: '/rights',
          component: Rights
        },
        {
          path: '/roles',
          component: Roles
        },
        {
          path: '/categories',
          component: Cate
        },
        {
          path: '/params',
          component: Params
        },
        {
          path: '/goods',
          component: GoodList
        },
        { path: '/goods/add', component: Add },
        {
          path: '/reports',
          component: Report
        }
      ]
    }
  ]
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next 是一个函数，表示放行
  //  next（）放行  next('/login') 强制跳转

  //如果用户访问的登录页，直接放行
  if (to.path === '/login') return next()
  //从sessionStorage中获取到保存的token值
  const tokenStr = window.sessionStorage.getItem('token')
  //没有token,强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router
