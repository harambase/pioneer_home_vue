<template>
  <div class="sidebar-collapse">
    <div class="top-strip">
    </div>
    <nav class="navbar nav_bottom" role="navigation">
      <div class="container">
        <div class="row" style="padding: 20px 0 0;">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <header class="logo">
              <h1>
                <img style="margin-top: -10px; width: 50px; height:50px;" :src="basePath + '/static/images/logo.png'"/>
                <a class="cd-logo link link--takiri" href="#" @click="$router.push({path:'/dashboard'})">先锋教育 <span>Pioneer Education</span></a>
              </h1>
            </header>
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-2">
            <i class="fa fa-globe">&nbsp;&nbsp;</i><a style="color: #444444;" href="#/site_map"
                                                      @click="$router.push({path:'/site_map'})"><strong>网站地图 |&nbsp;SiteMap</strong>
            </a><br>
            <i class="fa fa-user">&nbsp;&nbsp;</i><a style="color: #444444;" href="#/login"
                                                     @click="$router.push({path:'/login'})"><strong>登录 | Login EAS</strong></a>
          </div>
        </div>
      </div>
      <div class="row" style="background: rgba(55, 55, 55, 1); margin-top:20px;">
        <div class="container">
          <el-menu :default-active="activeIndex"
                   class="navbar nav_bottom"
                   mode="horizontal"
                   :router="true"
                   @select="handleSelect">
            <el-menu-item index="/about">
              <p>关于我们 <br>
                <small>About</small>
              </p>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">
                <p>社区特色 <br>
                  <small>Specialties</small>
                </p>
              </template>
              <el-menu-item index="/liberal_arts_college">
                <p>合作大学
                  <small>Universities</small>
                </p>
              </el-menu-item>
              <el-menu-item index="/dyned">
                <p>英语教学系统DynEd
                  <small>DynEd</small>
                </p>
              </el-menu-item>
              <el-menu-item index="/project_based_teaching">
                <p>项目式教学
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
                <p>教师团队
                  <small>Faculty & Staff</small>
                </p>
              </el-menu-item>
              <!--<el-menu-item index="/organization">-->
                <!--<p>组织架构-->
                  <!--<small>Organization</small>-->
                <!--</p>-->
              <!--</el-menu-item>-->
            </el-submenu>
            <el-menu-item index="/news/wechat">
              <p>最新动态 <br>
                <small>Updates</small>
              </p>
            </el-menu-item>
            <el-menu-item index="/achievement">
              <p>教学成果<br>
                <small>Achievements</small>
              </p>
            </el-menu-item>
            <el-submenu index="7">
              <template slot="title">
                <p>先锋分支 <br>
                  <small>Branches</small>
                </p>
              </template>
              <!--<el-menu-item index="/elementary">-->
                <!--<p>小学部-->
                  <!--<small>Elementary</small>-->
                <!--</p>-->
              <!--</el-menu-item>-->
              <el-menu-item index="7-2">
                <a style="text-decoration: none;" href="https://agoraacademy.cn">
                  <p>深圳社区
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
              <el-menu-item index="/faq">
                <p>常见问题
                  <small>FAQs</small>
                </p>
              </el-menu-item>
              <el-menu-item index="/contact">
                <p>联系信息
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
                <p>招募简章
                  <small>Admission Guide</small>
                </p>
              </el-menu-item>
              <el-menu-item index="/opportunity">
                <p>招聘信息
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
<style>

  ul.resp-tabs-list, p {
    margin: 0px;
    padding: 10px;
    line-height: 15px;
    font-weight: 600;
  }

  .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 60px;
    line-height: 0px;
    border-bottom: 2px solid transparent;
    color: #909399;
  }

  .top-strip {
    /*padding:20px 0 15px 0;*/
    background: url('../../public/images/top-line.jpg') 0px 0px;
    min-height: 4px;
  }

  .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border-bottom: 2px solid #409EFF;
    color: white;
  }

  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #409EFF;
    color: white;
  }

  .el-menu--horizontal > .el-submenu:focus .el-submenu__title, .el-menu--horizontal > .el-submenu:hover .el-submenu__title {
    color: white;
  }

  .el-dropdown-menu__item--divided:before, .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background-color: #010004;
  }

  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: 0;
    color: white;
  }

  .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background-color: #010004;
  }

  .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
    background-color: white;
    float: none;
    height: 36px;
    line-height: 36px;
    padding: 0 8px;
    color: #909399;
  }

  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: 0;
    color: white;
    background: black;
  }

  .el-menu--popup-bottom-start {
    margin-top: 0;
  }

  .el-menu--popup {
    z-index: 100;
    border: none;
    padding: 0;
    border-radius: 1px;
  }
</style>

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
