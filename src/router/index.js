import Vue from 'vue'
import Router from 'vue-router'
// SITE
import Home from '@/components/site/Home'
// LOGIN
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Profile from '@/components/login/Profile'
// ADMIN
import Admin from '@/components/admin/Home'
import Events from '@/components/admin/Events'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
