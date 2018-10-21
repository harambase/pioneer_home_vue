import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import About from '@/views/about'
import Organization from '@/views/organization/organization'
import Wechat from '@/views/news/wechat'
import Faculty from '@/views/organization/faculty_staff'
import Login from '@/views/common/login'
import Register from '@/views/common/register'
import SiteMap from '@/views/common/sitemap'
import FAQ from '@/views/contact/faq'
import Contact from '@/views/contact/contact'
import Admission from '@/views/opportunity/admission_guide'
import Opportunity from '@/views/opportunity/opportunity'
import PBT from '@/views/special/project_based_teaching'
import LAC from '@/views/special/liberal_arts_college'
import Single_School from '@/views/special/Single_School'



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
        {
          path: '/faq',
          name: '微信公众平台',
          component: FAQ,
        },
        {
          path: '/contact',
          name: '微信公众平台',
          component: Contact,
        },
        {
          path: '/admission_guide',
          name: '招生简章',
          component: Admission,
        },
        {
          path: '/opportunity',
          name: '招聘简章',
          component: Opportunity,
        },
        {
          path: '/project_based_teaching',
          name: '项目式学习',
          component: PBT,
        },
        {
          path: '/liberal_arts_college',
          name: '合作院校',
          component: LAC,
        },
        {
          path: '/liberal_arts_college/single',
          name: '合作院校',
          component: Single_School,
        },
        {
          path: '/about',
          name: '关于学校',
          component: About,
        },
      ]
    },
  ]
});

export default router
