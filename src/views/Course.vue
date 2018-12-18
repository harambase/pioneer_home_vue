<template>
  <section class="instrument-section">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>Curriculum</h2>
          <h6>先锋教学实践</h6>
        </div>
      </div>
    </div>
    <!--- technologies ---->
    <div class="row">
      <div class="container">
        <div class="col-md-12">
          <div class="instruments">
            <div class="row">
              <h3 class="last-updated"> 课程设置
                <small>Curriculum</small>
              </h3>
              <p>
                <strong>学习方式很重要</strong>在先锋除了上课之外，还有很多的非传统课堂活动，比如支教、运动会、春游、游学、公益等等，这些活动是和课堂同等重要的。而这些也是方式也统统是可以获得学分的。
                我们希望学员们可以打开视野，突破固有的对学习的想象，真正找到自己喜欢的领域钻进去，深入的学下去，然后将相关的学习技能迁移到其他必须的领域。
              </p>
              <p>
                In addition to class, there are many non-traditional classroom activities, such as teaching, sports,
                spring, study, public welfare, etc. These activities are as important as the classroom. And these are
                all ways to get credits.
                We hope that students can open their horizons, break through the inherent imagination of learning, truly
                find the areas they like to go in, learn in depth, and then transfer relevant learning skills to other
                necessary fields.
              </p>
              <div class="technologies tech-accordian" style="border: 6px solid #eee; padding: 30px 0 0;">
                <div class="row">
                  <h3 style="text-align: center;">近两年课程表 Class Schedules</h3>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-10" style="margin-top: 10px; margin-bottom: 30px">
                    <el-collapse accordion>
                      <el-collapse-item name="1">
                        <template slot="title">
                          <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title asd">
                              <span>&#8594;</span>
                              <a class="pa_italic">
                                <label class="horse1">2018年秋季课表| Fall 2018</label>
                              </a>
                            </h4>
                          </div>
                        </template>
                        <div class="row">
                          <div class="col-md-12 ins-image" style="margin-top: 0">
                            <img src="../assets/img/schedule/先锋2018秋季正式课程安排.jpg" title="先锋2018春季正式课程安排" alt=""/>
                          </div>
                        </div>
                      </el-collapse-item>
                      <el-collapse-item name="2">
                        <template slot="title">
                          <div class="panel-heading" role="tab" id="headingTwo">
                            <h4 class="panel-title asd">
                              <span>&#8594;</span>
                              <a class="pa_italic">
                                <label class="horse1">2018年春季课表| Spring 2018</label>
                              </a>
                            </h4>
                          </div>
                        </template>
                        <div class="row">
                          <div class="row">
                            <div class="col-md-12 ins-image" style="margin-top: 0">
                              <img src="../assets/img/schedule/先锋2018春季正式课程安排.jpg" title="先锋2018春季正式课程安排" alt=""/>
                            </div>
                          </div>
                        </div>
                      </el-collapse-item>
                      <el-collapse-item name="3">
                        <template slot="title">
                          <div class="panel-heading" role="tab" id="headingThree">
                            <h4 class="panel-title asd">
                              <span>&#8594;</span>
                              <a class="pa_italic">
                                <label class="horse1">2017年秋季课表| Fall 2017</label>
                              </a>
                            </h4>
                          </div>
                        </template>
                        <div class="row">
                          <div class="row">
                            <div class="col-md-12 ins-image" style="margin-top: 0">
                              <img src="../assets/img/schedule/先锋2017秋季正式课程安排.jpg" title="先锋2017秋季正式课程安排" alt=""/>
                            </div>
                          </div>
                        </div>
                      </el-collapse-item>
                      <el-collapse-item name="4">
                        <template slot="title">
                          <div class="panel-heading" role="tab" id="headingFour">
                            <h4 class="panel-title asd">
                              <span>&#8594;</span>
                              <a class="pa_italic">
                                <label class="horse1">2017年春季课表| Spring 2017</label>
                              </a>
                            </h4>
                          </div>
                        </template>
                        <div class="row">
                          <div class="row">
                            <div class="col-md-12 ins-image" style="margin-top: 0">
                              <img src="../assets/img/schedule/先锋2017春季正式课程安排.jpg" title="先锋2017春季正式课程安排" alt=""/>
                            </div>
                          </div>
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                  </div>
                  <div class="col-lg-1"></div>
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 30px;">
              <h3 class="last-updated"> 教学实践
                <small>Practices</small>
              </h3>
              <div class="blog" style="padding: 0">
                <div class="container">
                  <div class="bolg-posts">
                    <div class="row">
                      <div class="col-md-11" style="width: 98%">
                        <el-carousel :height="bannerHeight + 'px'" trigger="click">
                          <el-carousel-item v-for="(item, index) in courseArticleList" :key="item.id"
                                            @click="dialogVisible = true">
                            <el-card :body-style="{ padding: '0px',  background: '#eee', cursor: 'pointer'}" shadow="hover">
                              <div v-bind:class="{'blog-in': true, 'blog-top': true, 'blog-in1' : index%2==1}">
                                <a @click="doClick(item)" class="blog-post">
                                  <img :src="basePath + '/static/images/course/'+ item.pics[0].name" height="360px"/>
                                </a>
                                <div class="blog-grid">
                                  <div class="date">
                                    <span class="date-in"><i class="fa fa-calendar"></i>{{item.time}}</span>
                                    <a @click="doClick(item)" class="comments"><i class="fa fa-user"></i>
                                      {{item.author}}
                                    </a>
                                    <div class="clearfix"></div>
                                  </div>
                                  <h3>
                                    <a @click="doClick(item)">{{item.name}} <br> <small style="font-weight: 600">{{item.enName}}</small>
                                    </a>
                                  </h3>
                                  <p style="letter-spacing: 0">{{item.abstract}} <br> {{item.enAbstract}}</p>
                                  <a style="cursor: pointer" @click="doClick(item)" class="smore">阅读更多 READ MORE</a>
                                </div>
                                <div class="clearfix"></div>
                              </div>
                            </el-card>
                          </el-carousel-item>
                        </el-carousel>
                      </div>
                      <div class="col-md-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 30px;">
              <h3 class="last-updated"> 课堂瞬间
                <small>Moments</small>
              </h3>
              <el-carousel :interval="4000" type="card" height="550px">
                <el-carousel-item v-for="item in items" :key="item.id"
                                  @click="dialogVisible = true">
                  <el-card :body-style="{ padding: '0px',  background: '#eee', cursor: 'pointer'}" shadow="hover">
                    <div class="ser-img">
                      <img :src="item.src" style="height:500px">
                    </div>
                    <div style="padding: 14px;">
                      <h3>{{item.title}}</h3>
                      <p>{{item.description}}</p>
                    </div>
                  </el-card>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--- /instrument ---->
  </section>
</template>
<script>
  import axios from 'axios'

  const picItem = [
    {
      id: 0,
      title: '旅行课风光',
      description: '这次同学们来到了龙泉山，最后面的柿子老师是资深驴友',
      src: 'http://3992202.s21i-3.faidns.com/2/ABUIABACGAAg58KeqAUotPyXUjCAEDjVCg%211000x1000.jpg'
    },
    {
      id: 1,
      title: '旅行课风光',
      description: '龙泉山上种满了桃树，正逢初春，枝头上挂满了小朵的花苞',
      src: 'http://3992202.s21i-3.faidns.com/2/ABUIABACGAAgkMOeqAUo-rGl9QYwgBA41Qo%211000x1000.jpg'
    },
    {
      id: 2,
      title: '旅行课风光',
      description: '大家在山顶上的大合照',
      src: 'http://3992202.s21i-3.faidns.com/2/ABUIABACGAAg-8eeqAUop9jipQUwgBA41Qo%211000x1000.jpg'
    },
    {
      id: 3,
      title: '体育课',
      description: '在川大球场与好奇学校的橄榄球比赛',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76IpEpLZiczicQ620uXRQwR2JnMpM78kiaV89dG0osMbSNxtucwCiaxBgsdBib2YXfiaaD4SGE3hUxJabYHg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 4,
      title: '体育课',
      description: '20km城市骑行',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Km6bPvd4AXLc2OhA62JpRPYycicujGZKlDdWK5pOsCI1J6CTQepudNDLIQNgOgOhzTgISkIxgjEFw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 5,
      title: '体育课',
      description: '经过筹划和准备，同学们穿上安全警示背心，按各自所需准备好帽子、墨镜、饮用水，很多人迎来了人生中第一次的长途骑行',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Km6bPvd4AXLc2OhA62JpRPeGiaRXSDFOsaQibmWxncDAOQrFbktXSib4sLtMtmwmIJKa0PAicUicSnIzQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 6,
      title: 'DE徒步挑战--两天一夜',
      description: '和成都DE未来训练营一同合作，举行两天一夜露营活动',
      src: 'http://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Img4LnAnaxlG9Fm87TytrcuZYWhdVsbvTEictvicEwEb80cJHRaEdEibjr930MmWkoJrT9tHYbYibydw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 7,
      title: 'DE徒步挑战--两天一夜',
      description: '野外攀岩体验',
      src: 'http://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Img4LnAnaxlG9Fm87TytrcrJwo3rDXWCPHKBYJVCRlhib1Umxl0AQkDzelImbicPNE6Ticic2MZcv89Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 8,
      title: '万圣节狂欢',
      description: '由学生在陈佳老师的带领下自主预备、申请预算举办的Cosplay盛宴',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76JkQngg4ZTicw0oYtGwEj524eZ5iaADjxcpajLfBUiaBwKeCBmef4T7TYnykhCUP4tMRVVlgeJ8B1CAQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 9,
      title: '万圣节狂欢',
      description: '大合照',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76JkQngg4ZTicw0oYtGwEj524JrwSK1qt4va9brn62LPKhOT9psnia7BJs88P8JbqEick596pv169MX6Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 10,
      title: '秋日草坪音乐会',
      description: '阳光，肥皂泡儿，苹果，鲜花，深蓝色的野餐布，金黄的落叶，还有轻快的长笛曲，所谓秋日，就是如此了吧',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76J2o2Q77BianzicKnSfOoJUJ2kPjfzESGOZ1taygt0UPzsyvvnqlZvBia0812JticEyHWsw3vIbycibFPg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
  ];
  export default {
    name: 'course',
    data() {
      return {
        staffList: '',
        basePath: basePath,
        items: picItem,
        user: '',
        courseArticleList: '',
        bannerHeight: 0,
        screenWidth: document.body.clientWidth
      }
    },
    mounted() {
      axios.get(basePath + '/article').then(response => {
        this.courseArticleList = response.data.course;
      });
      this.setSize();
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth;
          this.screenWidth = window.screenWidth
        })()
      };
    },
    methods: {
      doClick(item) {
        window.localStorage.clear();
        window.localStorage.setItem('article', JSON.stringify(item));
        this.$router.push({path: '/news/article/single'});
      },
      setSize() {
        this.bannerHeight = 740 / 2560 * this.screenWidth;
        if(this.bannerHeight < 740) this.bannerHeight = 400;
        if(this.bannerHeight < 360) this.bannerHeight = 740
      }
    }
  }
</script>
