import Vue from 'vue'
import Router from 'vue-router'

const Dashboard = () => import('@/views/Dashboard');
const Course = () => import('@/views/Course');
const About = () => import('@/views/About');
const Achievement = () => import('@/views/Achievement');
const Organization = () => import('@/views/organization/Organization');
const Wechat = () => import('@/views/news/Wechat');
const Single_Article = () => import('@/views/news/Single_Article');
const Faculty = () => import('@/views/organization/Faculty');
const Personnel = () => import('@/views/organization/Personnel');
const Login = () => import('@/views/common/Login');
const Register = () => import('@/views/common/Register');
const SiteMap = () => import('@/views/common/Sitemap');
const FAQ = () => import('@/views/contact/FAQ');
const Contact = () => import('@/views/contact/Contact');
const Admission = () => import('@/views/opportunity/Admission_Guide');
const Opportunity = () => import('@/views/opportunity/Opportunity');
const PBT = () => import('@/views/special/Project_Based_Teaching');
const LAC = () => import('@/views/special/Liberal_Arts_College');
const DynEd = () => import('@/views/special/DynEd');
const Detail = () => import('@/views/special/School_Detail');
const Full = () => import('@/containers/Full');

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
          path: 'achievement',
          name: '教学成就',
          component: Achievement,
        },
        {
          path: 'course',
          name: '教学实践',
          component: Course,
        },
        {
          path: 'dyned',
          name: 'DynEd',
          component: DynEd,
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
          path: 'faculty_staff/personnel',
          name: '教师',
          component: Personnel,
        },
        {
          path: '/news/wechat',
          name: '微信公众平台',
          component: Wechat,
        },
        {
          path: '/faq',
          name: 'FAQ',
          component: FAQ,
        },
        {
          path: '/contact',
          name: '联系我们',
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
          path: '/liberal_arts_college/detail',
          name: '合作院校',
          component: Detail,
        },
        {
          path: '/about',
          name: '关于学校',
          component: About,
        },
        {
          path: '/news/article/single',
          name: '文章',
          component: Single_Article,
        },
      ]
    },
  ]
});

export default router
