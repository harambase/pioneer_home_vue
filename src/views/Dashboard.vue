<template>
  <div class="animated fadeIn">
    <div class="demo-2">
      <div class="sl-slider-wrapper sl-slide">
        <el-carousel height="600px">
          <el-carousel-item v-for="item in items" :key="item.id">
            <div class="sl-slide-inner">
              <h3>{{ item.title }}</h3>
              <blockquote>
                <p>{{item.description}}</p>
                <cite>先锋教育理念 Education Principals</cite>
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
        <h3 class="title text-center" style="padding-bottom: 10px;">先锋创始人 Initiative</h3>
        <div class="row">
          <div class="col-md-4 abt-img">
            <img :src=" basePath + '/static/images/organization/lxw_1.jpg'" alt="doctor" title="doctor"/>
          </div>
          <div class="col-md-8 abt-dec">
            <h2>刘晓伟 Mr.Liu Xiaowei <br>
              <small>校长 Principal</small>
            </h2>
            <p class="diff">一级导师、先锋教育创始人、青少年和儿童早期教育专家、美国弗吉尼亚大学教育心理学硕士、国家心理咨询师</p>
            <p style="margin-top: -20px; text-align: justify;">
              刘晓伟先生曾执教于四川大学，担任过北京先锋思维教育文化研究中心主任、美国教育资源文化研究中心主任、美国犹他州政府驻北京商务代表处首席代表、美国多飞公司教育顾问、上海市教委教改《信息科技》教材顾问。最早在中国幼儿园开展英语、信息科技和项目教学，有从幼儿园到大学各年龄段丰富的教研和教学经验。现任先锋教育学校校长。
              <br>
              Mr. Liu Xiaowei taught at Sichuan University and served as Director of the Beijing Pioneer Thinking
              Education and Culture Research Center, Director of the American Educational Resources and Culture Research
              Center, Chief Representative of the Utah Government Business Office in Beijing, Education Co., Ltd. of the
              American Dove Company, and Education Reform of the Shanghai Education Commission. Information Technology
              textbook consultant. He has been teaching English projects, information technology projects in
              kindergartens in China. He has rich teaching and research experience from kindergarten to university. He
              is currently the principal of the Pioneer Education School.
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
          <h3 style="color:white">先锋特色 Pioneer Specialties</h3>
        </div>
        <el-row :gutter="12">
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px',  background: '#eee'}" shadow="hover">
              <div class="ser-img">
                <img src="images/ser2.jpg" title="service" alt="" class="image"/>
              </div>
              <div style="padding: 14px;" class="stats-grid slideanim">
                <div class="bottom clearfix">
                  <i class="fa fa-smile-o">400</i>
                  <p class="stats-info">近20年间，超过400名先锋毕业生进入美国一流大学读书。</p>
                  <!--<br> In 20 years, over 400 graduates has been admitted into top United States Universities.-->
                  <el-button type="primary" round class="button" style="font-size: 16px;"
                             @click="$router.push({path:'/achievement'})">了解更多 Learn More
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px',  background: '#eee'}" shadow="hover">
              <div class="ser-img">
                <img src="images/ser2.jpg" title="service" alt="" class="image"/>
              </div>
              <div style="padding: 14px;" class="stats-grid slideanim">
                <div class="bottom clearfix">
                  <i class="fa fa-smile-o">15</i>
                  <p class="stats-info">15年以上的办学经验，在创新教育领域屈指可数。<br> </p>
                  <el-button type="primary" round class="button" style="font-size: 16px;"
                             @click="$router.push({path:'/about'})">了解更多 Learn More
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px',  background: '#eee'}" shadow="hover">
              <div class="ser-img">
                <img src="images/ser2.jpg" title="service" alt="" class="image"/>
              </div>
              <div style="padding: 14px;" class="stats-grid slideanim">
                <div class="bottom clearfix">
                  <i class="fa fa-smile-o">2</i>
                  <p class="stats-info">2个校区，成都、深圳可切换学习地点，看不一样的文化。</p>
                  <el-button type="primary" round class="button" style="font-size: 16px;"
                             @click="$router.push({path:'/campus'})">了解更多 Learn More
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px',  background: '#eee'}" shadow="hover">
              <div class="ser-img">
                <img src="images/universities/SJU_1.jpg" title="合作大学" class="image"/>
              </div>
              <div style="padding: 14px;" class="stats-grid slideanim">
                <div class="bottom clearfix">
                  <i class="fa fa-smile-o">18</i>
                  <p class="stats-info">与超过18所美国一流大学合作，并提供高额奖学金。</p>
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
          <h3>先锋教学团队 Faculty</h3>
          <p>We learn from the best!</p>
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
          <h3>媒体报道 Media Coverage</h3>
        </div>
        <el-row :gutter="12" class="text-justify">
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px',  background: '#eee', cursor: 'pointer'}" shadow="hover"
                     onclick="window.open('http://edu.newssc.org/system/20170605/002194184.htm')">
              <div class="ser-img">
                <img src="images/media/sichuannews.jpg" title="service" alt="" class="image"/>
              </div>
              <div style="padding: 14px;">
                <span>“新学习革命”是怎样的革命？看2017国际素质教育沙龙成都站如何诠释</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px',  background: '#eee', cursor: 'pointer'}" shadow="hover"
                     onclick="window.open('https://www.sohu.com/a/126938983_508606')">
              <div class="ser-img">
                <img src="images/media/sohu.jpg" title="service" alt="" class="image"/>
              </div>
              <div style="padding: 14px;">
                <span>【小微学校观察】 | 几只“气球”的出走——记成都先锋学校</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px',  background: '#eee', cursor: 'pointer'}" shadow="hover"
                     onclick="window.open('http://www.cultureopen.asia/2017/05/26/%E9%87%87%E8%AE%BF-%E5%BE%AE%E5%9E%8B%E5%AD%A6%E6%A0%A1%E5%85%88%E9%94%8B%E5%AD%A6%E6%A0%A1%E5%88%98%E6%99%93%E4%BC%9F%E6%A0%A1%E9%95%BF-%E5%AF%BB%E6%89%BE%E5%B9%B8%E7%A6%8F/')">
              <div class="ser-img">
                <img src="images/media/coa-logo.jpg" title="service" alt="" class="image"/>
              </div>
              <div style="padding: 14px;">
                <span>【采访-微型学校‘先锋学校’刘晓伟校长】 寻找幸福·自由的学生们… “这才是真正的教育”</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px',  background: '#eee', cursor: 'pointer'}" shadow="hover"
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
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px',  background: '#eee', cursor: 'pointer'}" shadow="hover"
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
  .el-carousel__item h3 {
    font-size: 70px;
    padding: 180px 30px 10px 30px;
    width: 80%;
    max-width: 960px;
    color: #fff;
    margin: 0 auto;
    position: relative;
    z-index: 100;
  }

  .el-carousel__item blockquote {
    padding-top: 10px;
    width: 80%;
    max-width: 960px;
    color: #fff;
    margin: 0 auto;
    position: relative;
    z-index: 100;
    font-size: 20px;
    font-weight: 300;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
  }

  .el-carousel__item blockquote p {
    letter-spacing: 1px;
    font-size: 20px;
    line-height: 30px;
    color: #fff;
  }

  .el-carousel__item blockquote cite {
    font-size: 14px;
    padding-top: 25px;
    font-weight: 600;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 5px;
    display: inline-block;
  }

  .el-carousel__item:nth-child(3) {
    background: url("../../public/images/5hui/1.jpg") no-repeat center;
    padding: 200px;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    position: absolute;
    left: -200px;
    /*width: 80%;*/
    height: 200px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }

  .el-carousel__item:nth-child(4) {
    background: url("../../public/images/5hui/2.jpg") no-repeat center;
    padding: 200px;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    position: absolute;
    left: -200px;
    /*width: 80%;*/
    height: 200px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }

  .el-carousel__item:nth-child(5) {
    background: url("../../public/images/5hui/3.jpg") no-repeat center;
    padding: 200px;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    position: absolute;
    left: -200px;
    /*width: 80%;*/
    height: 200px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }

  .el-carousel__item:nth-child(6) {
    background: url("../../public/images/5hui/4.jpg") no-repeat center;
    padding: 200px;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    position: absolute;
    left: -200px;
    /*width: 80%;*/
    height: 200px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }

  .el-carousel__item:nth-child(7) {
    background: url("../../public/images/5hui/5.jpg") no-repeat center;
    padding: 200px;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    position: absolute;
    left: -200px;
    /*width: 80%;*/
    height: 200px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }

  .stats {
    background: url("../../public/images/5hui/2.jpg") no-repeat fixed center;
    left: -200px;
    background-size: cover;
    height: 850px;
    text-align: center;
    padding-top: 90px;
  }

  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
            title: '学会做人 Good Character',
            description: '关于爱、包容、尊重的良好品格',
            pic: '/public/images/2.jpg'
          },
          {
            id: 2,
            title: '学会思考 Critical Thinking',
            description: '勇敢说不，尤其勇敢对自己说不',
            pic: '/public/images/2.jpg'
          },
          {
            id: 3,
            title: '学会交流 Communication',
            description: '一生具备对事物好奇探索的能力',
            pic: '/public/images/3.jpg'
          },
          {
            id: 4,
            title: '学会做人 Good Character',
            description: '与各式各样的人倾听沟通相处',
            pic: '/public/images/4.jpg'
          },
          {
            id: 5,
            title: '学会合作 Collaboration',
            description: '理解分歧、达成共识、欣赏每一个人',
            pic: '/public/images/5.jpg'
          }
        ]
      }
    },
    mounted() {
      axios.get('/staff').then(response => {
        this.staffList = response.data;
      })
    },
    methods: {
      doClick(item) {
        window.localStorage.setItem('personnel', JSON.stringify(item));
        this.$router.push({path: '/faculty_staff/personnel'});
      }
    }
  }
</script>
