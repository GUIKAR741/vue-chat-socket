import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
  {
    path: '/chat',
    name: 'chat',
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Chat.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
})

export default router
