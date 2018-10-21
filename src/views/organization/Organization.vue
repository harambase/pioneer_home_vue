<template>
  <div class="animated fadeIn">
    <!-- instruments-section -->
    <section class="instruments-section" v-if="!detail">
      <div class="inner-banner demo-2 text-center">
        <div id="breadcrumb_wrapper">
          <div class="container">
            <h2>School Organizations</h2>
            <h6>学校组织架构</h6>
          </div>
        </div>
      </div>
      <!--- instruments ---->
      <div class="instruments">
        <div class="container">
          <div class="row">
            <h3 class="last-updated"> 学校组织架构
              <small>Core Organizations</small>
            </h3>
            <div class="row">
              <div class="col-md-4">
                <h4>
                  <strong>董事会</strong>
                  <small>Board of Directors</small>
                </h4>
                <p>
                  先锋学生会是自发形成的组织，以学生为服务对象，为保障学生权益而生，明确学校规章制度，改善学校学习生活环境。
                  管理学生的事务和学术事务，对学校行政有建议权、对学校预算和支出有知情权，并参与学校的群规、校规、各区域使用底线的制定、修改与协助执行。
                </p>
                <p>
                  The Pioneer Student Union is a spontaneously formed organization that serves students,
                  protects students' rights and interests, clarifies school rules and regulations,
                  and improves the school's learning and living environment.
                  Also, student Union manages student affairs and academic affairs, have the right to propose school
                  administration,
                  and to know the school budget and expenditure, and participate in the school's QQ-group rules,
                  school rules, the use of the bottom line in each region, modification and assistance in
                  implementation.
                </p>
              </div>
              <div class="col-md-4">
                <h4>
                  <strong>学生会</strong>
                  <small>Student Union</small>
                </h4>
                <p>
                  先锋学生会是自发形成的组织，以学生为服务对象，为保障学生权益而生，明确学校规章制度，改善学校学习生活环境。
                  管理学生的事务和学术事务，对学校行政有建议权、对学校预算和支出有知情权，并参与学校的群规、校规、各区域使用底线的制定、修改与协助执行。
                  先锋学生会的成立由全体学生投票产生。
                </p>
                <p>
                  The Pioneer Student Union is a spontaneously formed organization that serves students,
                  protects students' rights and interests, clarifies school rules and regulations,
                  and improves the school's learning and living environment.
                  Also, student Union manages student affairs and academic affairs, have the right to propose school
                  administration,
                  and to know the school budget and expenditure, and participate in the school's QQ-group rules,
                  school rules, the use of the bottom line in each region, modification and assistance in
                  implementation.
                </p>
              </div>
              <div class="col-md-4">
                <h4>
                  <strong>仲裁委员会</strong>
                  <small>Arbitration Commission</small>
                </h4>
                <p>
                  保障先锋制度执行中的公平与公正，维护师生权益，建立和保障申述途径。确保仲裁的有效性和公正性，协助并监督学校执行仲裁决议。
                  先锋仲裁委员会的负责人为：教务负责人、学生会评议会负责人和董事会负责人。
                </p>
                <p>
                  The Arbitration Commission guarantees the fairness and justice in the implementation of the pioneer
                  system, safeguard the rights and interests of teachers and students, and establish and guarantee the
                  means of representation. Ensuring the validity and impartiality of arbitration, assisting and
                  supervising schools in implementing arbitration decisions.
                  The heads of the Pioneer Arbitration Committee are: the head of the academic affairs, the head of the
                  student council, and the person in charge of the board of directors.
                </p>
              </div>
            </div>

            <!--Horizontal Tab-->
          </div>
          <div class="row" style="margin-top: 30px;">
            <h3 class="last-updated"> 学校核心机构人员安排
              <small>Core Members of Organizations</small>
            </h3>
            <div class="lab-instruments">
              <el-tabs v-model="activeName" type="border-card">
                <el-tab-pane label="全部 ALL" name="first">
                  <div>
                    <div v-for="(item, index) in staffList" :key="item.id">
                      <div v-if="item.organization != '0'" class="col-md-3 jm-item first">
                        <div class="jm-item-wrapper">
                          <div class="jm-item-image">
                            <img v-if="item.id != 'lxw'"
                                 :src="basePath + '/static/images/organization/' + item.id +'_1.jpg'"
                                 :alt="item.name">
                            <img v-else :src="basePath + '/static/images/organization/' + item.id +'_2.jpg'"
                                 :alt="item.name">
                            <span class="jm-item-overlay"> </span>
                            <div class="jm-item-button"><a
                              @click="doClick(item)" style="cursor:pointer;">View</a></div>
                          </div>
                          <div class="jm-item-title">{{item.name}} {{item.enName}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="董事会 Board of Directors" name="second">
                  <div>
                    <div v-for="(item, index) in staffList" :key="item.id">
                      <div v-if="item.organization.indexOf('1')!=-1">
                        <div class="col-md-3 jm-item first">
                          <div class="jm-item-wrapper">
                            <div class="jm-item-image">
                              <img v-if="item.id != 'lxw'"
                                   :src="basePath + '/static/images/organization/' + item.id +'_1.jpg'"
                                   :alt="item.name">
                              <img v-else :src="basePath + '/static/images/organization/' + item.id +'_2.jpg'"
                                   :alt="item.name">
                              <span class="jm-item-overlay"> </span>
                              <div class="jm-item-button"><a
                                @click="doClick(item)" style="cursor:pointer">View</a>
                              </div>
                            </div>
                            <div class="jm-item-title">{{item.name}} {{item.enName}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="学生会 Student Union" name="fourth">
                  <div>
                    <div v-for="(item, index) in staffList" :key="item.id">
                      <div v-if="item.organization.indexOf('2')!=-1">
                        <div class="col-md-3 jm-item first">
                          <div class="jm-item-wrapper">
                            <div class="jm-item-image">
                              <img v-if="item.id != 'lxw'"
                                   :src="basePath + '/static/images/organization/' + item.id +'_1.jpg'"
                                   :alt="item.name">
                              <img v-else :src="basePath + '/static/images/organization/' + item.id +'_2.jpg'"
                                   :alt="item.name">
                              <span class="jm-item-overlay"> </span>
                              <div class="jm-item-button"><a
                                @click="doClick(item)" style="cursor:pointer;">View</a>
                              </div>
                            </div>
                            <div class="jm-item-title">{{item.name}} {{item.enName}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="仲裁委员会 Arbitration Commission" name="fifth">
                  <div>
                    <div v-for="(item, index) in staffList" :key="item.id">
                      <div v-if="item.organization.indexOf('3')!=-1">
                        <div class="col-md-3 jm-item first">
                          <div class="jm-item-wrapper">
                            <div class="jm-item-image">
                              <img v-if="item.id != 'lxw'"
                                   :src="basePath + '/static/images/organization/' + item.id +'_1.jpg'"
                                   :alt="item.name">
                              <img v-else :src="basePath + '/static/images/organization/' + item.id +'_2.jpg'"
                                   :alt="item.name">
                              <span class="jm-item-overlay"> </span>
                              <div class="jm-item-button"><a
                                @click="doClick(item)" style="cursor:pointer;">View</a>
                              </div>
                            </div>
                            <div class="jm-item-title">{{item.name}} {{item.enName}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </el-tab-pane>
              </el-tabs>

              <div id="parentHorizontalTab">
                <div class="resp-tabs-container hor_1">
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 30px;">
            <h3 class="last-updated"> 学校行政机构人员安排
              <small>Core Members of Organizations</small>
            </h3>
            <div class="lab-instruments">
              <el-tabs v-model="activeName2" type="border-card">
                <el-tab-pane label="教务部 Ministry of Education" name="second">
                  <div>
                    <div v-for="(item, index) in staffList" :key="item.id">
                      <div v-if="item.organization.indexOf('5')!=-1">
                        <div class="col-md-3 jm-item first">
                          <div class="jm-item-wrapper">
                            <div class="jm-item-image">
                              <img v-if="item.id != 'lxw'"
                                   :src="basePath + '/static/images/organization/' + item.id +'_1.jpg'"
                                   :alt="item.name">
                              <img v-else :src="basePath + '/static/images/organization/' + item.id +'_2.jpg'"
                                   :alt="item.name">
                              <span class="jm-item-overlay"> </span>
                              <div class="jm-item-button"><a
                                @click="doClick(item)" style="cursor:pointer;">View</a>
                              </div>
                            </div>
                            <div class="jm-item-title">{{item.name}} {{item.enName}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="传播委员会 Communication Committee" name="third">
                  <div>
                    <div v-for="(item, index) in staffList" :key="item.id">
                      <div v-if="item.organization.indexOf('6')!=-1">
                        <div class="col-md-3 jm-item first">
                          <div class="jm-item-wrapper">
                            <div class="jm-item-image">
                              <img v-if="item.id != 'lxw'"
                                   :src="basePath + '/static/images/organization/' + item.id +'_1.jpg'"
                                   :alt="item.name">
                              <img v-else :src="basePath + '/static/images/organization/' + item.id +'_2.jpg'"
                                   :alt="item.name">
                              <span class="jm-item-overlay"> </span>
                              <div class="jm-item-button"><a
                                @click="doClick(item)" style="cursor:pointer;">View</a>
                              </div>
                            </div>
                            <div class="jm-item-title">{{item.name}} {{item.enName}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="生活委员会 Living Committee" name="fourth">
                  <div>
                    <div v-for="(item, index) in staffList" :key="item.id">
                      <div v-if="item.organization.indexOf('7')!=-1">
                        <div class="col-md-3 jm-item first">
                          <div class="jm-item-wrapper">
                            <div class="jm-item-image">
                              <img v-if="item.id != 'lxw'"
                                   :src="basePath + '/static/images/organization/' + item.id +'_1.jpg'"
                                   :alt="item.name">
                              <img v-else :src="basePath + '/static/images/organization/' + item.id +'_2.jpg'"
                                   :alt="item.name">
                              <span class="jm-item-overlay"> </span>
                              <div class="jm-item-button">
                                <a @click="doClick(item)" style="cursor:pointer;">View</a>
                              </div>
                            </div>
                            <div class="jm-item-title">{{item.name}} {{item.enName}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </div>
      <!--- /instruments ---->
    </section>

    <CPersonnel v-else :item="user"/>
    <!-- //instruments-section -->
  </div>
</template>

<script>
  import axios from 'axios'
  import CPersonnel from "./Personnel";

  export default {
    name: 'organization',
    components: {CPersonnel},
    data() {
      return {
        staffList: [],
        basePath: basePath,
        activeName: 'first',
        activeName2: 'second',
        detail: false,
        user: ''
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
        let timer = setInterval(function(){
          this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          if(this.scrollTop>0){
            this.scrollTop = (this.scrollTop - speed >0) ? (this.scrollTop - speed) : 0;
            speed += 20;
            window.scrollTo(0,this.scrollTop);
          }else{
            clearInterval(timer);
          }
        },16)
        this.user = item
        this.detail = true
      }
    }
  }
</script>
