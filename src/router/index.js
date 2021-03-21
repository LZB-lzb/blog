import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookie from 'js-cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/article',
    component: () => import('../views/Article/Article.vue')
  },
  {
    path: '/edit',
    component: () => import('../views/Article/Edit.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Log/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/Log/Register.vue')
  },
  {
    path: '/user',
    component: () => import('../views/User/User.vue')
  },
]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

export default router
