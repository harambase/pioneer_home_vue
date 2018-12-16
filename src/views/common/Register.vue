<template>
  <div class="animated fadeIn">
    <!-- login-section -->
    <section class="login-page">
      <div class="login">
        <div class="container">
          <h3>请注册 Register Here</h3>
          <p class="est">注册属于你的先锋账号 Register Your Pioneer Network Account<br>
            已有账号？<a href="#/login" @click="goToLogin">前往登录!</a>
          </p>
          <div class="login-form-grids">
            <h5>用户信息 Profile information</h5>
            <form>
              <input type="text" placeholder="*姓 Last Name"
                     v-model="regUser.lastName" v-validate="'required'" name="name" required
                     :class="{'is-invalid': errors.has('name')}">
              <input type="text" placeholder="*名 First Name"
                     v-model="regUser.firstName" v-validate="'required'" name="name" required
                     :class="{'is-invalid': errors.has('name')}">
              <div v-show="errors.has('name')" class="invalid-tooltip">{{ errors.first('name') }}</div>
              <el-select id="year" style="width: 50%"
                         v-model="info.year">
                <el-option
                  v-for="item in [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
              <el-select v-model="info.semester" style="width: 49%">
                <el-option v-for="item in infoList" :key="item.value" :label="item.text" :value="item.value">
                </el-option>
              </el-select>

              <el-select id="year1" v-model="regUser.gender" v-validate="'required'" style="width: 100%"
                         placeholder="性别 Gender">
                <el-option
                  v-for="item in [{text: '男', value: 'male' },{text: '女', value: 'female' }, {text: '未指定', value: 'undetermined' }]"
                  :key="item.value"
                  :label="item.text"
                  :value="item.value">
                </el-option>
              </el-select>
              <div v-show="errors.has('gender')" class="invalid-tooltip">{{ errors.first('gender') }}</div>

              <el-date-picker style="width:100%"
                              v-model="regUser.birthday"
                              type="date"
                              prefix-icon="none"
                              format="yyyy-MM-dd"
                              placeholder="生日 Birthday">
              </el-date-picker>
            </form>
            <h5>登录信息 Login information</h5>
            <form>
              <input type="email" placeholder="Email" name="email" v-validate="'email'"
                     v-model="regUser.email">
              <div v-show="errors.has('email')" class="invalid-tooltip">{{ errors.first('email') }}</div>

              <input type="text" placeholder="*QQ" name="qq"
                     v-validate="{ required: true, numeric: true, min:5, max:11 }"
                     :class="{'is-invalid': errors.has('qq')}"
                     v-model="regUser.qq" required>
              <div v-show="errors.has('qq')" class="invalid-tooltip">{{ errors.first('qq') }}</div>


              <input type="text" placeholder="*电话号码" v-model="regUser.tel"
                     v-validate="'required|numeric|min:8|max:13'" name="tel"
                     :class="{'is-invalid': errors.has('tel')}" required>
              <div v-show="errors.has('tel')" class="invalid-tooltip">{{ errors.first('tel') }}</div>

              <input type="password" placeholder="*密码" name="password"
                     v-validate="'required|min:6|verify_password'"
                     :class="{'is-invalid': errors.has('password')}"
                     v-model="regUser.password">
              <div v-show="errors.has('password')" class="invalid-tooltip">{{ errors.first('password') }}</div>

              <input type="password" name="newPwd" placeholder="*请再次输入密码"
                     v-validate="'required|min:6'" v-model="newPwd"
                     v-on:change="notSame = newPwd !== regUser.password"
                     :class="{'is-invalid': errors.has('password') || notSame}">
              <div v-show="notSame" class="invalid-tooltip">两次密码不一致</div>
              <div v-show="errors.has('newPwd')" class="invalid-tooltip">{{ errors.first('newPwd') }}</div>

              <div class="register-check-box">
                <div class="check">
                  <label class="checkbox"><input type="checkbox" name="checkbox" v-model="confirm"
                                                 v-validate="'required'"><i> </i>确认上述信息并提交</label>
                </div>
                <el-tooltip v-show="errors.has('checkbox')"
                            class="item"
                            effect="dark"
                            placement="top-start"
                            :content="errors.first('checkbox')">

                </el-tooltip>
              </div>
              <el-popover
                placement="top"
                width="200"
                trigger="manual"
                v-model="showModal">
                <p>{{msg}}</p>
                <div style="text-align: right; margin: 0">
                  <el-button type="primary" size="mini" @click="goToLogin">确定</el-button>
                </div>
                <el-button type="warning" style="width: 100%" slot="reference" @click="doReg">注册 Sign Up</el-button>
              </el-popover>
            </form>
          </div>
        </div>
      </div>

    </section>
    <!-- //login-section -->
  </div>

</template>


<script>

  import axios from 'axios'
  import md5 from 'js-md5'

  export default {
    name: 'Register',
    data() {
      return {
        infoList: [{text: '春季加入先锋', value: '01'}, {text: '秋季加入先锋', value: '02'}, {text: '夏季加入先锋', value: '03'}],
        regUser: {
          info: '',
          lastName: '',
          firstName: '',
          email: '',
          password: '',
          qq: '',
          tel: '',
          birthday: '',
          gender: '',
          comment: ''
        },
        isReturn: false,
        info: {
          year: '2018',
          semester: '01'
        },
        newPwd: '',
        notSame: false,
        showModal: false,
        msg: '',
        succ: false,
        fail: false,
        headerBgVariant: '',
        confirm: false,
      }
    },
    methods: {
      doReg: function () {
        this.$validator.validateAll().then((result) => {
          if (!result)
            return;
          let regUser = this.regUser;
          let info = this.info.year + '-' + this.info.semester;

          regUser.password = md5(this.regUser.password);
          regUser.info = info;

          axios.post('/request/user/register', regUser).then((response) => {
            if (response.data.code === 2001) {
              this.msg = '申请成功！请等待审核通过。';
              this.headerBgVariant = 'success';
              this.showModal = true

            } else {
              this.msg = response.data.msg;
              this.headerBgVariant = 'danger';
              this.showModal = true
            }
          })
        })
      },
      goToLogin() {
        this.$router.push({path: '/login'})
      }
    }
  }

</script>
