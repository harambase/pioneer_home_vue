import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Organization from '@/views/organization/organization'
import Wechat from '@/views/news/wechat'
import Faculty from '@/views/organization/faculty_staff'
import Login from '@/views/common/login'
import Register from '@/views/common/register'
import SiteMap from '@/views/common/siteMap'

Vue.use(Router);

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
          name: '网站地图',
          component: SiteMap,
        },
        {
          path: 'faculty_staff',
          name: '教师',
          component: Faculty,
        },
        {
          path: '/news/wechat',
          name: '微信公众平台',
          component: Wechat,
        },
      ]
    },
  ]
});

export default router
