import Vue from 'vue'
import VueRouter from 'vue-router'
// 加载一级组件
import Dashboard from '../views/dashboard/Dashboard'

// 懒加载二级组件
// 主页
const Home = () => import('../views/home/Home')
// 分类
const Category = () => import('../views/category/Category')
// 吃什么
const Eat = () => import('../views/eat/Eat')
// 购物车
const Cart = () => import('../views/cart/Cart')
// 我的
const My = () => import('../views/my/My')

const Login = () => import('../views/login/Login')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    meta: {
      keepAlive: true
    }
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [{
      path: '/dashboard',
      redirect: '/dashboard/home',
      meta: {
        keepAlive: true
      }
    }, {
      path: 'home',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true
      }
    }, {
      path: 'category',
      name: 'category',
      component: Category,
      meta: {
        keepAlive: true
      }
    }, {
      path: 'eat',
      name: 'eat',
      component: Eat,
      meta: {
        keepAlive: true
      }
    }, {
      path: 'cart',
      name: 'cart',
      component: Cart,
      meta: {
        keepAlive: true
      }
    }, {
      path: 'my',
      name: 'my',
      component: My,
      meta: {
        keepAlive: true
      }
    }]
  }, {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
