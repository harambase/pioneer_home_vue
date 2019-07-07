<template>
  <section class="instrument-section">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>Achievement</h2>
          <h6>先锋教学成果</h6>
        </div>
      </div>
    </div>
    <!--- technologies ---->
    <div class="row">
      <div class="container">
        <div class="col-md-12">
          <div class="instruments">
            <div class="row" style="margin-top: 30px;">
              <h3 class="last-updated"> 学生作品
                <small>Student's Work</small>
              </h3>
              <div class="blog" style="padding: 0">
                <div class="container">
                  <div class="bolg-posts">
                    <div class="row">
                      <div class="col-md-11" style="width: 98%">
                        <el-carousel :height="bannerHeight + 'px'" trigger="click">
                          <el-carousel-item v-for="(item, index) in courseArticleList" :key="item.id"
                                            @click="dialogVisible = true">
                            <el-card :body-style="{ padding: '0px',  background: '#eee', cursor: 'pointer'}"
                                     shadow="hover">
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
                                    <a @click="doClick(item)">{{item.name}} <br>
                                      <small style="font-weight: 600">{{item.enName}}</small>
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
              <h3 class="last-updated"> 毕业生信息
                <small>Graduate information</small>
              </h3>
              <div class="lab-instruments">
                <div v-for="item in graduateList" :key="item.id">
                  <div class="col-md-2 jm-item first">
                    <div class="jm-item-wrapper">
                      <div class="jm-item-image">
                        <img :src="basePath + '/static/images/logo.png'">
                        <span class="jm-item-overlay"> </span>
                        <!--<div class="jm-item-button"><a-->
                          <!--@click="doClick(item)" style="cursor:pointer;">View</a></div>-->
                      </div>
                      <div class="jm-item-title">{{item.name}}，{{item.enName}} {{item.year}}，{{item.university}}</div>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import axios from 'axios'
  const graduateList=[
    {
      id: 5,
      year: 2018,
      name: '牛XX',
      enName: 'Niu',
      university: 'CSB|SJU',
    },
    {
      id: 1,
      year: 2017,
      name: '颜XX',
      enName: 'Yan',
      university: 'CSB|SJU',
    },
    {
      id: 2,
      year: 2017,
      name: '张XX',
      enName: 'Zhang',
      university: 'CSB|SJU',
    },
    {
      id: 3,
      year: 2017,
      name: '陈XX',
      enName: 'Chen',
      university: 'CSB|SJU',
    },
    {
      id: 4,
      year: 2017,
      name: '黄XX',
      enName: 'Huang',
      university: 'CSB|SJU',
    },
    {
      id: 10,
      year: 2013,
      name: '林XX',
      enName: 'Lin',
      university: 'CSB|SJU',
    }
  ];

  export default {
    name: 'achievement',
    data() {
      return {
        staffList: '',
        basePath: basePath,
        user: '',
        courseArticleList: '',
        bannerHeight: 0,
        screenWidth: document.body.clientWidth,
        graduateList: graduateList
      }
    },
    mounted() {
      axios.get(basePath + '/article').then(response => {
        this.courseArticleList = response.data.achievement;
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
        if (this.bannerHeight < 740) this.bannerHeight = 400;
        if (this.bannerHeight < 360) this.bannerHeight = 740
      }
    }
  }
</script>
