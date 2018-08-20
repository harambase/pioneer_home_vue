<template>
  <div class="animated fadeIn">
    <div v-if="!detail">
      <div class="demo-2">
        <div id="slider" class="sl-slider-wrapper sl-slide">
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
        <div class="container">
          <p class="slideanim">Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance.</p>
          <div class="stats-info">
            <div class="col-md-3 col-sm-3 stats-grid slideanim">
              <i class="fa fa-smile-o"></i>
              <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='18000'
                   data-delay='.5' data-increment="50">18000
              </div>
              <p class="stats-info">Happy Smiles</p>
            </div>
            <div class="col-md-3 col-sm-3 stats-grid slideanim">
              <i class="fa fa-facebook"></i>
              <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='1700'
                   data-delay='.5' data-increment="5">1700
              </div>
              <p class="stats-info">Facebook Likes</p>
            </div>
            <div class="col-md-3 col-sm-3 stats-grid slideanim">
              <i class="fa fa-twitter"></i>
              <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='21500'
                   data-delay='.5' data-increment="20">21500
              </div>
              <p class="stats-info">Twitter Followers</p>
            </div>
            <div class="col-md-3 col-sm-3 stats-grid slideanim">
              <i class="fa fa-flask"></i>
              <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='285'
                   data-delay='.5' data-increment="1">285
              </div>
              <p class="stats-info">Lorem Ipsum</p>
            </div>
            <div class="clearfix"></div>
          </div>

        </div>
      </div>
      <!-- //Stats -->

      <!-- tabs -->
      <div class="vertical-tabs">
        <div class="container">
          <h3 class="title text-center">学校特色 School Specialists </h3>
          <div class="row">
            <div class="col-lg-12 col-md-12 bhoechie-tab-container">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 bhoechie-tab-menu">
                <div class="list-group">
                  <a href="#" class="list-group-item active text-center">
                    先锋的合作院校<br>
                    <small>Universities</small>
                  </a>
                  <a href="#" class="list-group-item text-center">
                    先锋游学<br>
                    <small>Study By Travel</small>
                  </a>
                  <a href="#" class="list-group-item text-center">
                    项目式教学<br>
                    <small>Project-based Teaching</small>
                  </a>
                </div>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 bhoechie-tab">
                <!-- flight section -->
                <div class="bhoechie-tab-content active">
                  <div class="services">
                    <div class="ser-img">
                      <img src="images/ser1.jpg" title="service" alt=""/>
                    </div>
                    <div class="ser-info">
                      <h3>Contrary to popular belief, Lorem Ipsum is not simply random text</h3>
                      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                        interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                        reproduced in their
                        by English versions from the 1914 translation by H. Rackham.
                      </p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque
                        ipsa quae ab illo inventore dicta sunt explicabo
                      </p>
                      <a href="/liberal_arts_college">阅读更多 Read More</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <!-- train section -->
                <div class="bhoechie-tab-content">
                  <div class="services">
                    <div class="ser-img">
                      <img src="images/ser2.jpg" title="service" alt=""/>
                    </div>
                    <div class="ser-info">
                      <h3>At vero eos et accusamus et iusto dignissimos ducimus qui blanditiis</h3>
                      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                        interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                        reproduced in their
                        by English versions from the 1914 translation by H. Rackham.
                      </p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque
                        ipsa quae ab illo inventore dicta sunt explicabo
                      </p>
                      <a href="single.html">Read More</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>

                <!-- hotel search -->
                <div class="bhoechie-tab-content">
                  <div class="services">
                    <div class="ser-img">
                      <img src="images/ser3.jpg" title="service" alt=""/>
                    </div>
                    <div class="ser-info">
                      <h3>On the other hand, we denounce with righteous indignation</h3>
                      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                        interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                        reproduced in their
                        by English versions from the 1914 translation by H. Rackham.
                      </p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque
                        ipsa quae ab illo inventore dicta sunt explicabo
                      </p>
                      <a href="single.html">Read More</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <div class="bhoechie-tab-content">
                  <div class="services">
                    <div class="ser-img">
                      <img src="images/ser4.jpg" title="service" alt=""/>
                    </div>
                    <div class="ser-info">
                      <h3>Laboris nisi ut aliquip ex ea commodo consequat</h3>
                      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                        interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                        reproduced in their
                        by English versions from the 1914 translation by H. Rackham.
                      </p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque
                        ipsa quae ab illo inventore dicta sunt explicabo
                      </p>
                      <a href="single.html">Read More</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <div class="bhoechie-tab-content">
                  <div class="services">
                    <div class="ser-img">
                      <img src="images/ser5.jpg" title="service" alt=""/>
                    </div>
                    <div class="ser-info">
                      <h3>Temporibus autem quibusdam et aut officiis debitis</h3>
                      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                        interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                        reproduced in their
                        by English versions from the 1914 translation by H. Rackham.
                      </p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque
                        ipsa quae ab illo inventore dicta sunt explicabo
                      </p>
                      <a href="single.html">Read More</a>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    background: url("../../public/images/5hui/1.jpg") no-repeat fixed center;
  }

  .el-carousel__item:nth-child(4) {
    background: url("../../public/images/5hui/2.jpg") no-repeat fixed center;
  }

  .el-carousel__item:nth-child(5) {
    background: url("../../public/images/5hui/3.jpg") no-repeat fixed center;
  }

  .el-carousel__item:nth-child(6) {
    background: url("../../public/images/5hui/4.jpg") no-repeat fixed center;
  }

  .el-carousel__item:nth-child(7) {
    background: url("../../public/images/5hui/5.jpg") no-repeat fixed center;
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
