import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Organization from '@/views/organization/Organization'

Vue.use(Router)

const router = new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
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
      ]
    },
  ]
});

export default router
