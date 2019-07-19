<template>
  <div class="animated fadeIn">
    <div class="demo-2">
      <div class="sl-slider-wrapper sl-slide">
        <el-carousel height="400px" style="position: relative" indicator-position="inside">
          <el-carousel-item v-for="item in items" :key="item.id">
            <div class="sl-slide-inner">
              <h3>{{ item.title }}</h3>
              <blockquote>
                <p>{{item.description}}</p>
                <cite>先锋教育 Pioneer Education</cite>
              </blockquote>
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="sl-slider">
        </div><!-- /sl-slider -->
      </div><!-- /slider-wrapper -->
    </div>

    <!-- banner-bottom -->
    <div class="banner-bottom">
      <div class="container">
        <h3 class="title text-center" style="padding-bottom: 10px;">社区创始人寄语 The principal's note</h3>
        <div class="row">
          <div class="col-md-4 ins-image">
            <img :src=" basePath + '/static/images/organization/lxw_1.jpg'" alt="doctor" title="doctor"/>
          </div>
          <div class="col-md-8 abt-dec">
            <h2>刘晓伟 <br>
              <small>Mr. Liu Xiaowei</small>
            </h2>
            <p class="diff">一级导师、先锋教育创始人、青少年和儿童早期教育专家、美国弗吉尼亚大学教育心理学硕士、国家心理咨询师</p>
            <p style="margin-top: -20px; text-align: justify;">
              &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
              先锋教育已走过十年历程，因其先锋的教育理念和非常的教育方式而引起家长和媒体的特别关注。如今从先锋走出国门的学子有的已在全球最知名的学府如耶鲁大学和哥伦比亚大学毕业，有的已就职于国际知名大公司并在各行各业渐露头角，跃跃欲试。
              十年前人们对年轻学子出国留学的种种质疑已经被滚滚留学潮所淹没。为了让更多的家长和孩子从先锋教育中受益，我们将先锋教育特有的教育模式从家庭学校转型为实体学校。实体学校仍然秉承先锋教育一贯的导师制，旨在让每一个特别的学子都能得到特别的关注，走出自己非常的成材之路。
              先锋教育是着眼于孩子的未来，因此迥异于急功近利的常规教育模式。我们相信，孩子的身心健康和良好的未来发展才是我们家庭幸福的源泉。在日新月异的信息时代，如果我们今天不生活在将来，将来我们就只能生活在过去。愿我们的孩子、家长和我们一起，携手为孩子创造一个光明的未来。
              <br>
              &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Pioneer education has gone through a decade, and it has attracted
              attention from parents and the media because of
              its pioneering educational philosophy and methods. Nowadays, some of the students who have gone abroad
              from the Pioneer
              have graduated from the most famous universities in the world, such as Yale University and Columbia
              University. Some of them have already worked in internationally companies and are eager to try in various
              industries.
              Ten years ago, people’s doubts about young students studying abroad have been overwhelmed by the tide of
              studying abroad.
              In order to allow more parents and children to benefit from Pioneers, we have transformed the
              unique education model of Pioneer education from a family school to a physical school.
              Entity schools still adhere to the consistent mentoring system of Pioneer education, aiming to make
              every student get attention he/she needs and find his/her own path to success.
              Pioneer education is aimed at the future of children, so it is different from the regular education model
              of quick success. We believe that the child's physical and mental health and good future development are
              the source of happiness for our family.
              In the ever-changing information age, if we do not live in the future today, we will only live in the
              past. May our children, parents and us
              work together to create a bright future for our children.
            </p>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!-- //banner-bottom -->

    <!-- Stats -->
    <div class="stats">
      <div class="container" style="font-weight: 100">
        <div class="news-section-head text-center">
          <h3>先锋特色 Specialties</h3>
        </div>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="12" :md="9" :lg="6" :xl="6" style="margin-bottom: 10px;">
            <el-card :body-style="{ padding: '0px', margin:'-10px 0 0 0', background: '#eee'}" shadow="hover">
              <div class="ser-img">
                <img src="images/universities/SJU_1.jpg" title="合作大学" class="image"/>
              </div>
              <div style="padding: 14px;" class="stats-grid slideanim">
                <div class="bottom clearfix">
                  <i class="fa">400</i>
                  <p class="stats-info">近20年间，超过400名先锋毕业生进入美国一流大学读书。
                  <br> In 20 years, over 400 graduates has been admitted into top Universities.</p>
                  <el-button type="primary" round class="button" style="font-size: 16px;"
                             @click="$router.push({path:'/achievement'})">了解更多 Learn More
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="9" :lg="6" :xl="6" style="margin-bottom: 10px;">
            <el-card :body-style="{ padding: '0px', margin:'-10px 0 0 0', background: '#eee'}" shadow="hover">
              <div class="ser-img">
                <img src="images/universities/SJU_1.jpg" title="合作大学" class="image"/>
              </div>
              <div style="padding: 14px;" class="stats-grid slideanim">
                <div class="bottom clearfix">
                  <i class="fa">15</i>
                  <p class="stats-info">15年以上的办学经验，在创新教育领域屈指可数。<br>
                    More than 15 years of educational experience.</p>
                  <el-button type="primary" round class="button" style="font-size: 16px;"
                             @click="$router.push({path:'/about'})">了解更多 Learn More
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="9" :lg="6" :xl="6" style="margin-bottom: 10px;">
            <el-card :body-style="{ padding: '0px', margin:'-10px 0 0 0', background: '#eee'}" shadow="hover">
              <div class="ser-img">
                <img src="images/universities/SJU_1.jpg" title="合作大学" class="image"/>
              </div>
              <div style="padding: 14px;" class="stats-grid slideanim">
                <div class="bottom clearfix">
                  <i class="fa">2</i>
                  <p class="stats-info">2个校区，成都、深圳可切换学习地点，看不一样的文化。<br>
                    The two campuses, Chengdu and Shenzhen, to see different cultures.
                  </p>
                  <el-button type="primary" round class="button" style="font-size: 16px;" onclick="window.open('https://agoraacademy.cn')">了解更多 Learn More
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="9" :lg="6" :xl="6" style="margin-bottom: 10px;">
            <el-card :body-style="{ padding: '0px', margin:'-10px 0 0 0', background: '#eee'}" shadow="hover">
              <div class="ser-img">
                <img src="images/universities/SJU_1.jpg" title="合作大学" class="image"/>
              </div>
              <div style="padding: 14px;" class="stats-grid slideanim">
                <div class="bottom clearfix">
                  <i class="fa">18</i>
                  <p class="stats-info">与超过18所美国一流大学合作，并提供高额奖学金。<br>
                    Cooperate with 18+ top American universities and offer scholarships.
                  </p>
                  <el-button type="primary" round class="button" style="font-size: 16px;"
                             @click="$router.push({path:'/liberal_arts_college'})">了解更多 Learn More
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- //tabs -->

    <!-- quick links -->
    <div class="news-section">
      <div class="container">
        <div class="news-section-head text-center">
          <h3>教学团队 <br>Faculty | Staff</h3>
        </div>
        <ul class="item-list g-clearfix" id="detail">
          <div v-for="(item) in staffList" :key="item.id">
            <div class="main-box" v-if="item.type === 'f'">
              <a v-if="item.id != 'lxw'" @click="doClick(item)" style="cursor:pointer;"
                 class="team-icon">
                <img :src="basePath + '/static/images/organization/' + item.id +'_1.jpg'" :alt="item.name">
              </a>
              <a v-else @click="doClick(item)" style="cursor:pointer;" class="team-icon">
                <img :src="basePath + '/static/images/organization/' + item.id +'_2.jpg'" :alt="item.name">
              </a>
              <p style="line-height: 17px">{{item.name}} <br> {{item.enName}}<br><span>{{item.jobTitle}}</span>
              </p>
              <div class="teacher-tips">
                <h2>{{item.name}}</h2>
                <span :title="item.shortDescription">{{item.shortDescription}}</span>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <!-- //quick links -->

    <!-- news letter -->
    <div class="subscribe text-center">
      <div class="container">
        <div class="news-section-head text-center">
          <h3>媒体报道 Pioneer On Media</h3>
        </div>
        <el-row :gutter="12" class="text-justify">
          <el-col :xs="24" :sm="12" :md="9" :lg="6" :xl="6" style="margin-bottom: 10px;">
            <el-card :body-style="{ padding: '0px', margin:'-10px 0 0 0', background: '#eee', cursor: 'pointer'}" shadow="hover"
                     onclick="window.open('http://edu.newssc.org/system/20170605/002194184.htm')">
              <div class="ser-img">
                <img src="images/media/sichuannews.jpg" title="service" alt="" class="image"/>
              </div>
              <div style="padding: 14px;">
                <span>“新学习革命”是怎样的革命？看2017国际素质教育沙龙成都站如何诠释</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="9" :lg="6" :xl="6" style="margin-bottom: 10px;">
            <el-card :body-style="{ padding: '0px', margin:'-10px 0 0 0', background: '#eee', cursor: 'pointer'}" shadow="hover"
                     onclick="window.open('https://www.sohu.com/a/126938983_508606')">
              <div class="ser-img">
                <img src="images/media/sohu.jpg" title="service" alt="" class="image"/>
              </div>
              <div style="padding: 14px;">
                <span>【小微学校观察】 | 几只“气球”的出走——记成都先锋学校</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="9" :lg="6" :xl="6" style="margin-bottom: 10px;">
            <el-card :body-style="{ padding: '0px', margin:'-10px 0 0 0', background: '#eee', cursor: 'pointer'}" shadow="hover"
                     onclick="window.open('http://www.cultureopen.asia/2017/05/26/%E9%87%87%E8%AE%BF-%E5%BE%AE%E5%9E%8B%E5%AD%A6%E6%A0%A1%E5%85%88%E9%94%8B%E5%AD%A6%E6%A0%A1%E5%88%98%E6%99%93%E4%BC%9F%E6%A0%A1%E9%95%BF-%E5%AF%BB%E6%89%BE%E5%B9%B8%E7%A6%8F/')">
              <div class="ser-img">
                <img src="images/media/coa-logo.jpg" title="service" alt="" class="image"/>
              </div>
              <div style="padding: 14px;">
                <span>【采访-微型学校‘先锋学校’刘晓伟校长】 寻找幸福·自由的学生们… “这才是真正的教育”</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="9" :lg="6" :xl="6" style="margin-bottom: 10px;">
            <el-card :body-style="{ padding: '0px', margin:'-10px 0 0 0', background: '#eee', cursor: 'pointer'}" shadow="hover"
                     onclick="window.open('https://v.qq.com/x/page/a0714zwi2xv.html')">
              <div class="ser-img">
                <img src="images/media/cgtn.jpg" title="service" alt="" class="image"/>
              </div>
              <div style="padding: 14px;">
                <span>TV Program - Better Education <br> 电视节目-更好的教育</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="12" class="text-justify" style="margin-top: 10px">
          <el-col :xs="24" :sm="12" :md="9" :lg="6" :xl="6" style="margin-bottom: 10px;">
            <el-card :body-style="{ padding: '0px', margin:'-10px 0 0 0', background: '#eee', cursor: 'pointer'}" shadow="hover"
                     onclick="window.open('http://www.chinanews.com/edu/dxxy/news/2008/03-18/1195395.shtml')">
              <div class="ser-img">
                <img src="images/media/chinanews.jpg" title="service" alt="" class="image"/>
              </div>
              <div style="padding: 14px;">
                <span>高二退学读“私塾” 成都男生走出另类成才路</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style>
  .demo-2 .el-carousel__item h3 {
    font-size: 70px;
    padding: 110px 30px 10px 30px;
    max-width: 960px;
    color: #fff;
    margin: 0 auto;
    position: relative;
    z-index: 100;
  }

  .demo-2 .el-carousel__item blockquote {
    padding-top: 10px;
    max-width: 960px;
    color: #fff;
    margin: 0 auto;
    position: relative;
    z-index: 100;
    font-size: 20px;
    font-weight: 300;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
  }

  .demo-2 .el-carousel__item blockquote p {
    padding:0;
    letter-spacing: 1px;
    font-size: 25px;
    font-weight: 900;
    line-height: 30px;
    color: #fff;
  }

  .demo-2 .el-carousel__item blockquote cite {
    font-size: 25px;
    padding-top: 20px;
    font-weight: 600;
    font-style: normal;
    display: inline-block;
  }

  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .el-carousel--horizontal{
    overflow-y: hidden;
  }
  .el-card {
    border: none;
  }

  .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
    -webkit-box-shadow: 0 10px 30px 2px rgb(249, 244, 244);
    box-shadow: 0 10px 30px 2px rgb(249, 244, 244);
  }

</style>

<script>
  import axios from 'axios'
  import CPersonnel from "./organization/Personnel";

  export default {
    name: 'dashboard',
    components: {CPersonnel},
    data() {
      return {
        staffList: '',
        basePath: basePath,
        user: '',
        items: [
          {
            id: 1,
            title: '学会做人',
            description: 'Good Character'
          },
          {
            id: 2,
            title: '学会思考',
            description: 'Critical Thinking'
          },
          {
            id: 3,
            title: '学会交流',
            description: 'Communication'
          },
          {
            id: 4,
            title: '学会学习',
            description: 'Life-Long Learning'
          },
          {
            id: 5,
            title: '学会合作',
            description: 'Collaboration'
          }
        ],
        bannerHeight: 0,
        screenWidth: document.body.clientWidth
      }
    },
    mounted() {
      axios.get('/staff').then(response => {
        this.staffList = response.data;
      })
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
        window.localStorage.setItem('personnel', JSON.stringify(item));
        this.$router.push({path: '/faculty_staff/personnel'});
      },
      setSize() {
        this.bannerHeight = 740 / 2560 * this.screenWidth;
        if(this.bannerHeight < 740) this.bannerHeight = 740;
        if(this.bannerHeight < 360) this.bannerHeight = 360
      }
    }
  }
</script>
