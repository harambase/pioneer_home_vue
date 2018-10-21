<template>
  <!-- instruments-section -->
  <section class="instruments-section">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>Faculty & Staff Members</h2>
          <h6>先锋教职员工</h6>
        </div>
      </div>
    </div>
    <!--- instruments ---->
    <div class="instruments">
      <div class="container">
        <div class="row">
          <h3 class="last-updated"> 先锋的导师制
            <small> Mentor System</small>
          </h3>
          <p>
            <strong>导师制</strong>是先锋的核心，每个先锋学员都有一名指导老师，帮助学员解决学习生活中的各项问题，有针对性的进行个性化的学习指导。
            导师扮演两种角色：一是镜子，在跟学员不断的交流中让学员看清自己，进而搬走困扰前进的“石头”。二是催化剂，在学习共同体，导师扮演者催化剂的角色，推进学习共同体一起针对某些主题深入学习下去。
          </p>
          <p>
            The mentor system is the core of the Pioneer School. Each pioneer student has an mentor to help the
            students solve various problems in the study and life, and to carry out personalized learning
            guidance.
            The mentor plays two roles: First, the mirror, in the constant communication with the students, let
            the students see themselves, and then move away the "stone" that is in the way.
            The second is the catalyst, as we all in the learning community, the role of the mentor as a
            catalyst, and the promotion of the learning community to further study on certain topics.
          </p>
          <!--Horizontal Tab-->
        </div>
        <div class="row" style="margin-top: 30px;">
          <div class="lab-instruments" id="detail">
            <div>
              <h3 class="last-updated"> 先锋的教职员工
                <small> Faculty & Staff</small>
              </h3>
              <div class="lab-instruments">
                <el-tabs v-model="activeName" type="border-card">
                  <el-tab-pane label="全部 ALL" name="first">
                    <div>
                      <div v-for="item in staffList" :key="item.id">
                        <div v-if="item.type == 'f'" class="col-md-3 jm-item first">
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
                  <el-tab-pane label="导师 Mentor" name="second">
                    <div>
                      <div v-for="item in staffList" :key="item.id">
                        <div v-if="item.category.indexOf('1')!=-1 && item.type == 'f'">
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
                  <el-tab-pane label="助教 Assistant Teacher" name="third">
                    <div>
                      <div v-for="item in staffList" :key="item.id">
                        <div v-if="item.category.indexOf('2')!=-1 && item.type == 'f'">
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
                  <el-tab-pane label="全职 Full-time Staff" name="fourth">
                    <div>
                      <div v-for="item in staffList" :key="item.id">
                        <div v-if="item.category.indexOf('7')!=-1 && item.type == 'f'">
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
                  <el-tab-pane label="兼职 Part-time Staff" name="fifth">
                    <div>
                      <div v-for="item in staffList" :key="item.id">
                        <div v-if="item.category.indexOf('8')!=-1 && item.type == 'f'">
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
                  <el-tab-pane label="志愿者 Volunteers" name="sixth">
                    <div>
                      <div v-for="item in staffList" :key="item.id">
                        <div v-if="item.category.indexOf('4')!=-1 && item.type == 'f'">
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

<script>
  import axios from 'axios';

  export default {
    name: 'faculty_staff',
    data() {
      return {
        basePath: basePath,
        user: '',
        activeName: 'first',
        staffList: '',
      }
    },
    mounted() {
      axios.get(this.basePath + '/staff').then(response => {
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
