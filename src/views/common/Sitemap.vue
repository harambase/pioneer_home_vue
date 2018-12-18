<template>
  <section class="sitemap-section">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>Sitemap</h2>
          <h6>网站地图</h6>
        </div>
      </div>
    </div>
    <!--- sitemap ---->
    <div class="sitemap">
      <div class="container">
        <h3 class="last-updated">先锋网站地图|Sitemap</h3>
        <div class="col-md-4 sitemap-grid">
          <h4>关于我们</h4>
          <ul>
            <li><span>&#62;</span><a @click="$router.push({path: '/about'})" style="cursor: pointer">关于我们 | About Us</a></li>
          </ul>
          <h4>学校特色</h4>
          <ul>
            <li><span>&#62;</span><a @click="$router.push({path: '/liberal_arts_college'})" href="#/liberal_arts_college">合作大学 | Universities</a></li>
            <li><span>&#62;</span><a @click="$router.push({path: '/dyned'})" style="cursor: pointer">英语教学系统DynEd | DynEd</a></li>
            <li><span>&#62;</span><a @click="$router.push({path: '/project_base_learning'})" href="#/project_base_learning">项目式教学 | Project-based Learning</a></li>
          </ul>
          <h4>教学实践</h4>
          <ul>
            <li><span>&#62;</span><a @click="$router.push({path: '/course'})" style="cursor: pointer">教学实践 | Curriculum</a></li>
          </ul>
        </div>
        <div class="col-md-4 sitemap-grid">

          <h4>团队组织</h4>
          <ul>
            <!--<li><span>&#62;</span><a @click="$router.push({path: '/organization'})" style="cursor: pointer">组织架构 | Organization</a></li>-->
            <li><span>&#62;</span><a @click="$router.push({path: '/faculty_staff'})" style="cursor: pointer">教师团队 | Faculty&Staff</a></li>
          </ul>
          <h4>最新动态</h4>
          <ul>
            <li><span>&#62;</span><a @click="$router.push({path: '/wechat'})"style="cursor: pointer">最新动态 | Updates</a></li>
          </ul>
          <h4>教学成果</h4>
          <ul>
            <li><span>&#62;</span><a @click="$router.push({path: '/achievement'})" style="cursor: pointer">教学成果 | Achievements</a></li>
          </ul>

        </div>
        <div class="col-md-4 sitemap-grid">
          <h4>先锋分支</h4>
          <ul>
            <!--<li><span>&#62;</span><a @click="$router.push({path: '/elementary'})" href="#/elementary">小学部 | Elementary</a></li>-->
            <li><span>&#62;</span><a href="https://agoraacademy.cn">深圳分校 | Agora Academy</a></li>
          </ul>
          <h4>联系我们</h4>
          <ul>
            <li><span>&#62;</span><a @click="$router.push({path: '/faq'})" style="cursor: pointer">常见问题 | FAQs</a></li>
            <li><span>&#62;</span><a @click="$router.push({path: '/contact'})" style="cursor: pointer">联系信息 | Contact Info</a></li>
          </ul>
          <h4>加入先锋</h4>
          <ul>
            <li><span>&#62;</span><a @click="$router.push({path: '/opportunity'})" style="cursor: pointer">招聘信息 | Career</a></li>
            <li><span>&#62;</span><a @click="$router.push({path: '/admission_guide'})" style="cursor: pointer">招生简章 | Admission Guide</a></li>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <!--- /sitemap ---->
  </section>
</template>
<script>
  export default {
    name: 'dashboard',
  }
</script>
