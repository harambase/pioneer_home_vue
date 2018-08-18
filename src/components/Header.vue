<template>
  <div class="sidebar-collapse">
    <div class="top-strip">
    </div>
    <nav class="navbar nav_bottom" role="navigation">
      <div class="container">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <header class="logo">
              <h1>
                <img style="margin-top: -10px; width: 50px; height:50px;" src="/static/img/logo.png"/>
                <a class="cd-logo link link--takiri" route="{path:'/'}">先锋教育学校 <span>Pioneer Education</span></a>
              </h1>
            </header>
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-2">
            <i class="fa fa-globe">&nbsp;&nbsp;</i><a style="color: #444444; text-decoration: none;" href="/site_map">网站地图|&nbsp;Site
            Map</a><br>
            <i class="fa fa-user">&nbsp;&nbsp;</i><a style="color: #444444; text-decoration: none;" href="/eas">登录|&nbsp;Login</a>
          </div>
        </div>
      </div>
      <div class="row" style="background: #444; margin-top:20px;">
        <div class="container">
          <el-menu :default-active="activeIndex"
                   class="navbar nav_bottom"
                   mode="horizontal"
                   :router="true"
                   text-color="#bdbdbd"
                   active-text-color="#fff"
                   @select="handleSelect">
            <el-menu-item index="/about">
              <p>关于我们 <br>
                <small>About</small>
              </p>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">
                <p>学校特色 <br>
                  <small>Specialties</small>
                </p>
              </template>
              <el-menu-item index="/liberal_arts_college">
                <p>合作大学 <br>
                  <small>Universities</small>
                </p>
              </el-menu-item>
              <el-menu-item index="/study_by_travel">
                <p>游学项目 <br>
                  <small>Study By Trave</small>
                </p>
              </el-menu-item>
              <el-menu-item index="/project_based_teaching">
                <p>项目式教学 <br>
                  <small>Project-based Learning</small>
                </p>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="/course">
              <p>教学实践 <br>
                <small>Curriculum</small>
              </p>
            </el-menu-item>
            <el-submenu index="5">
              <template slot="title">
                <p>团队组织 <br>
                  <small>Teams</small>
                </p>
              </template>
              <el-menu-item index="/faculty_staff">
                <p>教师团队 <br>
                  <small>Faculty & Staff</small>
                </p>
              </el-menu-item>
              <el-menu-item index="/organization">
                <p>组织架构 <br>
                  <small>Organization</small>
                </p>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <p>全部动态 <br>
                  <small>Updates</small>
                </p>
              </template>
              <el-menu-item index="/news/wechat">
                <p>微信公众平台 <br>
                  <small>WeChat</small>
                </p>
              </el-menu-item>
              <el-menu-item index="/activity">
                <p>学校活动 <br>
                  <small>Activities</small>
                </p>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="/achievement">
              <p>教学成果 <br>
                <small>Achievements</small>
              </p>
            </el-menu-item>
            <el-submenu index="7">
              <template slot="title">
                <p>先锋分支 <br>
                  <small>Branches</small>
                </p>
              </template>
              <el-menu-item index="/elementary">
                <p>小学部 <br>
                  <small>Elementary</small>
                </p>
              </el-menu-item>
              <el-menu-item index="7-2">
                <a href="https://agoraacademy.cn">
                  <p>深圳分校 <br>
                    <small>Agora Academy</small>
                  </p>
                </a>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <p>联系我们 <br>
                  <small>Contact Us</small>
                </p>
              </template>
              <el-menu-item index="/contact/faq">
                <p>常见问题 <br>
                  <small>FAQs</small>
                </p>
              </el-menu-item>
              <el-menu-item index="/contact">
                <p>联系信息 <br>
                  <small>Contact Info</small>
                </p>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="9">
              <template slot="title">
                <p>加入先锋 <br>
                  <small>Opportunity</small>
                </p>
              </template>
              <el-menu-item index="/admission_guide">
                <p>招生简章 <br>
                  <small>Admission Guide</small>
                </p>
              </el-menu-item>
              <el-menu-item index="/opportunity">
                <p>招聘信息 <br>
                  <small>Career</small>
                </p>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </nav>
  </div>
</template>
<!--<style>-->

  <!--.el-menu-item p, .el-submenu__title p {-->
    <!--padding: 0 !important;-->
    <!--text-align: center;-->
    <!--font-weight: 400;-->
    <!--font-size: 14px;-->
    <!--margin: 10px 10px;-->
    <!--line-height: 20px;-->
    <!--text-transform: uppercase;-->
    <!--letter-spacing: 1px;-->
    <!--font-family: 'Roboto Condensed', sans-serif;-->
  <!--}-->
<!--</style>-->

<script>

  export default {
    name: 'c-header',

    data() {
      return {
        activeIndex: "1",
        basePath: basePath
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key);
        console.log(keyPath)
      }
    }
  }
</script>
