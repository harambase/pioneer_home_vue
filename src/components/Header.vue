<template>
  <header class="app-header navbar">
    <div class="top-strip">
    </div>
    <nav class="navbar nav_bottom" role="navigation">
      <div class="container">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <header class="logo">
              <h1>
                <img style="margin-top: -10px; width: 50px; height:50px;" src="/static/images/logo.png"/>
                <a class="cd-logo link link--takiri" href="/index">先锋教育学校 <span>Pioneer Education</span></a>
              </h1>
            </header>
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-2">
            <i class="fa fa-globe">&nbsp;&nbsp;</i><a style="color: #444444; text-decoration: none;" href="/site_map">网站地图|&nbsp;Site Map</a><br>
            <i class="fa fa-user">&nbsp;&nbsp;</i><a style="color: #444444; text-decoration: none;" href="/login">登录|&nbsp;Login</a>
          </div>
        </div>
      </div>
      <div class="row" style="background: #444; margin-top:20px;">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header nav_2">
            <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse"
                    data-target="#bs-megadropdown-tabs">目录
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"></a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
            <ul class="nav navbar-nav nav_1">
              <li><a href="/about">关于我们 <br>
                <small>About</small>
              </a></li>
              <li>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button">学校特色<br>
                  <small>Specialties</small>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu drop_menu" role="menu">
                  <li><a href="/liberal_arts_college">合作大学
                    <small>Universities</small>
                  </a></li>
                  <li><a href="/study_by_travel">游学项目
                    <small>Study By Travel</small>
                  </a></li>
                  <li><a href="/project_based_teaching">项目式教学
                    <small>Project-based Learning</small>
                  </a></li>
                </ul>
              </li>

              <li><a href="/course">教学实践<br>
                <small>Curriculum</small>
              </a></li>
              <li>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button">团队组织<br>
                  <small>Teams</small>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu drop_menu" role="menu">
                  <li><a href="/faculty_staff">教师团队
                    <small>Faculty & Staff</small>
                  </a></li>
                  <li><a href="/organization">组织架构
                    <small>Organization</small>
                  </a></li>
                </ul>
              </li>
              <li role="presentation" class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button">
                  全部动态 <br>
                  <small>Updates</small>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu drop_menu" role="menu">
                  <li><a href="/news/wechat">微信公众平台
                    <small>WeChat</small>
                  </a></li>
                  <li><a href="/activity">学校活动
                    <small>Activities</small>
                  </a></li>
                </ul>
              </li>

              <li><a href="/achievement">教学成果 <br>
                <small>Achievements</small>
              </a></li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button">
                  先锋分支 <br>
                  <small>Branches</small>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu drop_menu" role="menu">
                  <li><a href="/elementary">小学部
                    <small>Elementary</small>
                  </a></li>
                  <li><a href="https://agoraacademy.cn">深圳分校
                    <small>Agora Academy</small>
                  </a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">联系我们 <br>
                  <small>Contact Us</small>
                  <span class="caret"></span></a>
                <ul class="dropdown-menu drop_menu" role="menu">
                  <li><a href="/contact/faq">常见问题
                    <small>FAQs</small>
                  </a></li>
                  <li><a href="/contact">联系信息
                    <small>Contact Info</small>
                  </a></li>
                </ul>
              </li>
              <li role="presentation" class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button">
                  加入先锋 <br>
                  <small>Opportunity</small>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu drop_menu" role="menu">
                  <li><a href="/admission_guide">招生简章
                    <small>Admission Guide</small>
                  </a></li>
                  <li><a href="/opportunity">招聘信息
                    <small>Career</small>
                  </a></li>
                </ul>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div>
      </div>
    </nav>
  </header>
</template>
<script>

  export default {
    name: 'c-header',
  }
</script>
