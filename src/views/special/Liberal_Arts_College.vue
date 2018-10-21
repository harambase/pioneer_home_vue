<template>

  <!-- instruments-section -->
  <section class="laboratory">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>Universities</h2>
          <h6>先锋的合作院校</h6>
        </div>
      </div>
    </div>
    <!--- instruments ---->
    <div class="technologies">
      <div class="container">
        <div class="row">
          <h3 class="last-updated">文理学院简介
            <small>Introduction to Liberal Arts College</small>
          </h3>
          <div class="tech-accordian">
            <el-collapse v-model="activeNames" accordion class="tech-accordian">
              <el-collapse-item name="1" active>
                <template slot="title">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title asd">
                      <span>&#8594;</span>
                      <a class="pa_italic">
                        <label class="horse1">中国人眼中的文理学院 The Chinese view of Liberal Arts
                          College</label>
                      </a>
                    </h4>
                  </div>
                </template>
                <div class="panel panel-default">
                  <div id="collapseOne" class="panel-collapse collapse in">
                    <div class="panel-body panel_text">
                      <div class="row">
                        <div class="col-md-5">
                          <img :src="basePath + '/static/images/universities/SJU_1.jpg'"/>
                          <p class="diff">
                            <small> @Brace Hemmelgarn bracehemmelgarn 21 Sep 2016<br></small>
                            圣本笃学院和圣约翰大学<br> College of Saint Benedict|Saint John's University<br>
                          </p>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-6">
                          <p><strong>文理学院Liberal Arts
                            College（简称LAC</strong>）。以本科教育为主，四年制课程，有的文理学院也设研究生院。文理学院有公立、私立之分，通常都有政府及大企业的资助。在美国，文理学院往往代表着经典、小规模、高质量的本科教育。许多文理学院的学术声誉往往不亚于哈佛耶鲁等名校，因而成为很多美国贵族教育子女的首选。而国人对文理学院的陌生，是因为下述几个原因所致。
                          </p>
                          <p>首先，中国学生去美国留学，大部分是在研究生阶段进入美国的综合类大学从事研究工作。而文理学院没有研究生院，所以中国人不熟悉。</p>
                          <p>
                            其次，中国前几年风靡一时的高校大合并风潮，几乎让所有的“学院”都消失殆尽，例如上海外国语学院改称上海外国语大学，北京邮电学院改称北京邮电大学。仿佛改称了大学，就位高一等，而如果自己被称作学院，则是低声下气，颜上无光。殊不知，在美国，大凡称作学院的，都是很牛的学校，从麻省理工学院，到加州理工学院，到纽约的艺术学院。如果把麻省理工学院改称麻省大学，那个档次不知道要降低多少级。在这样一种带有偏见的眼光下，中国人自然对文理学院是看不上眼。</p>
                          <p>还有，文理学院在国内很多时候被错误翻译成人文学院。而国人素来重理轻文，就更加看不上这些“人文学院”。</p>
                          <p>
                            但国人的误解，却始终抹煞不了文理学院的光芒。可以毫不夸张地说，文理学院是美国教育最引以为豪的精髓。没有文理学院的教育，就没有美国今天的成就。小规模、高的师生比例、专著本科教育、坚持通才教育，这些美国文理学院的教育哲学，值得我们中国大学的领导们深思。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
            <el-collapse accordion class="tech-accordian second">
              <el-collapse-item name="2">
                <template slot="title">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title asd">
                      <span>&#8594;</span>
                      <a class="pa_italic collapsed">
                        <label class="horse2">文理学院的优势 Advantages of LACs</label>
                      </a>
                    </h4>
                  </div>
                </template>
                <div class="panel panel-default">
                  <div class="panel-collapse collapse in">
                    <div class="panel-body panel_text">
                      <div class="ins-details">
                        <div class="span span1">
                          <p class="left">注重本科教育 Focus On Education</p>
                          <p class="right">
                            文理学院一般只提供本科教育，这有利于它将最大的精力花在对学生的培养上，学生需要接受各个方面的教育，尤其注重思维和写作能力的培养。</p>
                          <div class="clearfix"></div>
                        </div>
                        <div class="span span2">
                          <p class="left">小规模 Small Scale</p>
                          <p class="right">
                            文理学院一般是小规模办学，授课一般是以十几人的小班为主，生活上也比较容易融入美国的文化。而且，文理学院资金雄厚，校友联系紧密，在实习以及就业机会上也有很大优势。
                            同时，由于文理学院的规模小，师生间互动密切。这对培养学生的沟通能力和领导能力，都非常有帮助。根据美国新闻周刊的统计，美国的著名文理学院，如：Williams
                            College 、Wellesley
                            College的毕业生就读研究生的比例在美国甚至高于哈佛耶鲁这样的名校。小规模、师生比例高、专著本科教育、坚持通才教育——是文理学院的教育哲学。</p>
                          <div class="clearfix"></div>
                        </div>
                        <div class="span span1">
                          <p class="left">教学质量高 Best Quality</p>
                          <p class="right">
                            好的文理学院的声誉绝不比哈佛耶鲁差，学生的质量也很高。从横向来看，这是三类美国大学本科教育中为国人少为人知的“开小灶”教育。说美国文理学院如何如何好，下面的数字或许可以说明点问题。
                            统计数字上来看，尽管文理学院的毕业生占美国大学本科毕业生的比例仅3%
                            在财富杂志罗列的最富有的CEO中所占比例为8%
                            美国历任总统的19%
                            美国国家科学院院士的20%
                            普利策获得者的23%
                          </p>

                          <div class="clearfix"></div>
                        </div>
                        <div class="span span2">
                          <p class="left">广泛的就业前景 Promising Future</p>
                          <p class="right">
                            文理学院注重本科教育，注重的是学生的全面素质，从文理学院毕业的学生通常具备良好的沟通能力和很强的领导能力；由于学校与企业关系密切，在文理学院的带薪实习机会较多，毕业生不但知识扎实，专业精通程度高、事业上的干练程度和魄力等方面，都远远优于普通毕业生，因此，毕业于文理学院的学生通常就业领域比较广、前景好、社会认可程度高，在美国当地很受欢迎。文理学院毕业生一直保持着高就业率，想继续深造的学生通常能够申请到排名很靠前的美国Top名校。宋美龄就是毕业于卫斯理学院；当红歌星王力宏，就是从全美最好的LAC—威廉姆斯学院的音乐学院毕业。美国克林顿夫人希拉里、美国国务卿奥尔布赖特、美国华人劳工部长赵晓岚、美国前总统肯尼迪的夫人杰奎琳。包括美国当选总统奥巴马也从全美排名第36位的文理学院——西方学院Occidental
                            College转入哥伦比亚大学获得学士学位。工作多年之后，最终取得哈佛大学法律博士学位。
                          </p>
                          <div class="clearfix"></div>
                        </div>
                        <div class="span span1">
                          <p class="left">丰厚的奖学金机会 Scholarship</p>
                          <p class="right">申请者在选学校时把奖学金放在第一位，那么文理学院的机会要比综合性大学多，而且竞争也没有综合性大学激烈。
                            大多的LAC仅仅提供本科教育，因此教师能够集中精力进行教学，而不必花费大量的精力从事科学实验和论文发表。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>

          </div>
          <!--Horizontal Tab-->
        </div>
        <div class="row" style="margin-top: 30px;">
          <h3 class="last-updated"> 先锋的合作院校
            <small>Universities</small>
          </h3>
          <div class="lab-instruments" id="detail">
            <div id="parentHorizontalTab">
              <div class="resp-tabs-container hor_1">
                <div>
                  <div v-for="(item) in schoolList" :key="item.id">
                    <div class="col-md-2 jm-item first" @click="doClick(item)" style="cursor: pointer">
                      <div class="jm-item-wrapper">
                        <div class="jm-item-image">
                          <img :src="basePath + '/static/images/universities/' + item.shortName +'_icon.jpg'"
                               :alt="item.name">
                          <span class="jm-item-overlay"> </span>
                        </div>
                        <div class="jm-item-title">{{item.name}}</div>
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
    </div>
    <!--- /instruments ---->
  </section>
  <!-- //instruments-section -->

</template>
<style>
  .inner-banner {
    background: url("../../../public/images/5hui/5.jpg") no-repeat center;
    background-size: cover;
  }
</style>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        school: '',
        schoolList: [],
        basePath: basePath,
        activeNames: ['1'],
      }
    },
    mounted() {
      axios.get('/school').then(response => {
        this.schoolList = response.data;
      })
    },
    methods: {
      doClick(item) {
        window.localStorage.setItem('school', JSON.stringify(item));
        this.$router.push({path: '/liberal_arts_college/detail'});
      }
    }
  }
</script>
