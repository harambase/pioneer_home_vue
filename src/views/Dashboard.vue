<template>
  <div class="animated fadeIn">
    <div v-if="!detail">
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
          <h3 class="title text-center" style="padding-bottom: 10px;">关于学校 About us</h3>
          <div class="row">
            <div class="col-md-4 abt-img">
              <img :src=" basePath + '/static/images/organization/lxw_1.jpg'" alt="doctor" title="doctor"/>
            </div>
            <div class="col-md-4 abt-dec">
              <h2>刘晓伟
                <small>校长</small>
              </h2>
              <p class="diff">一级导师、先锋教育创始人、青少年和儿童早期教育专家、美国弗吉尼亚大学教育心理学硕士、国家心理咨询师</p>
              <p>
                刘晓伟先生曾执教于四川大学，担任过北京先锋思维教育文化研究中心主任、美国教育资源文化研究中心主任、美国犹他州政府驻北京商务代表处首席代表、美国多飞公司教育顾问、上海市教委教改《信息科技》教材顾问。最早在中国幼儿园开展英语、信息科技和项目教学，有从幼儿园到大学各年龄段丰富的教研和教学经验。现任先锋教育学校校长。</p>

            </div>
            <div class="col-md-4 timing">
              <div class="opening-hours">
                <h3><i class="fa fa-clock-o"></i>学校编年史 </h3>
                <ul>
                  <li>1998年</li>
                  <li>刘校长在北京成立“北京先锋思维教育文化有限公司”...</li>
                  <div class="clearfix"></div>
                </ul>
                <ul>
                  <li>2002年</li>
                  <li>刘校长在上海继续实践教育理念...</li>
                  <div class="clearfix"></div>
                </ul>
                <ul>
                  <li>2002年-2006年</li>
                  <li>先锋教育开始采用在线教育...</li>
                  <div class="clearfix"></div>
                </ul>
                <ul>
                  <li>2006年-2013年</li>
                  <li>刘校长回到成都，在家中开办私塾...</li>
                  <div class="clearfix"></div>
                </ul>
                <ul>
                  <li>2013年-至今</li>
                  <li>先锋教育学校拥有了校园，进入了新的阶段。</li>
                  <div class="clearfix"></div>
                </ul>
              </div>
              <div class="help">
                <a href="#/about" @click="$router.push({path:'/about'})"
                   class="btn btn-default btn-default_2 pull-left"
                   data-toggle="modal"
                   data-target="#applyModal_1">阅读更多 Read More</a>
              </div>
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
            <h3>先锋特色 Pioneer Specialties</h3>
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
                    <el-button type="text" class="button">了解更多 Learn More</el-button>
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
                    <p class="stats-info">15年以上的办学经验，在创新教育领域屈指可数。</p>
                    <el-button type="text" class="button">了解更多 Learn More</el-button>
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
                    <el-button type="text" class="button">了解更多 Learn More</el-button>
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
                    <el-button type="text" class="button">了解更多 Learn More</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- //tabs -->

      <!-- quick links -->
      <div class="news-section" id="news">
        <div class="container">
          <div class="news-section-head text-center">
            <h3>先锋教师团队 Faculty & Staff</h3>
            <p>We learn from the best!</p>
          </div>
          <ul class="item-list g-clearfix" id="detail">
            <div v-for="(item, index) in staffList" :key="item.id">
              <div class="main-box" v-if="item.type === 'f'">
                <a v-if="item.id != 'lxw'" @click="doClick(item)" style="cursor:pointer;"
                   class="team-icon">
                  <img :src="basePath + '/static/images/organization/' + item.id +'_1.jpg'" :alt="item.name">
                </a>
                <a v-else @click="doClick(item)" style="cursor:pointer;" class="team-icon">
                  <img :src="basePath + '/static/images/organization/' + item.id +'_2.jpg'" :alt="item.name">
                </a>
                <p>{{item.name}} {{item.enName}}<br><span>{{item.jobTitle}}</span>
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
          <h3>媒体报道 Pioneer on Media</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s. Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature.</p>

        </div>
      </div>
    </div>
    <CPersonnel v-else :item="user"/>
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
  import CPersonnel from "../components/Personnel";

  export default {
    name: 'dashboard',
    components: {CPersonnel},
    data() {
      return {
        staffList: '',
        basePath: basePath,
        user: '',
        detail: false,
        items: [
          {
            id: 1,
            title: '学会做人 Good Character',
            description: '关于爱、包容、尊重的良好品格',
            pic: '/public/images/1.jpg'
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
        let speed = 10;
        let timer = setInterval(function () {
          this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          if (this.scrollTop > 0) {
            this.scrollTop = (this.scrollTop - speed > 0) ? (this.scrollTop - speed) : 0;
            speed += 20;
            window.scrollTo(0, this.scrollTop);
          } else {
            clearInterval(timer);
          }
        }, 16)
        this.user = item
        this.detail = true
      }
    }
  }
</script>
