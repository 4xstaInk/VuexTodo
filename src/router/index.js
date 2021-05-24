import Vue from 'vue'
import Router from 'vue-router'
//import Home from '../components/Home.vue'


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile_Folder/Profile')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Signup_Folder/Signup_Page')
    },
  ]
})
