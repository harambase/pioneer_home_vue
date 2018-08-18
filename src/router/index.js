import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Organization from '@/views/organization/Organization'
import Login from '@/views/common/Login'
import Register from '@/views/common/Register'
import SiteMap from '@/views/common/SiteMap'

Vue.use(Router);

const router = new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      redirect: '/login',
      name: '官网',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: '主页',
          component: Dashboard,
        },
        {
          path: 'organization',
          name: '组织架构',
          component: Organization,
        },
        {
          path: 'login',
          name: '登录',
          component: Login,
        },
        {
          path: 'register',
          name: '注册',
          component: Register,
        },
        {
          path: 'site_map',
          name: '注册',
          component: SiteMap,
        },
      ]
    },
  ]
});

export default router
