<template>
  <div class="animated fadeIn">
    <section class="login-page">
      <div class="inner-banner demo-2 text-center">
        <div id="breadcrumb_wrapper">
          <div class="container">
            <h2>Pioneer Central Portal</h2>
            <h6>先锋中央门户网站</h6>
          </div>
        </div>
      </div>
      <!--- login ---->
      <!-- login -->
      <div class="login">
        <div class="container">
          <div class="login-form-grids">
            <h3>登录 | LOG IN <br>
              <small>Pioneer Central Portal</small>
            </h3>
            <hr/>
            <div>
              <form onsubmit="return false;">
                <div v-if="loginError">
                  <h6 style="color:#be4951; text-align: center">用户名或者密码不正确! <br>
                    <small>Wrong Credentials!</small></h6>
                </div>
                <label class="test-info"><i class='fa fa-user'></i> PIONEERID|先锋用户ID：</label>
                <input type="text" v-model="user.username">
                <label class="test-info"><i class='fa fa-lock'></i> PASSWORD|密码：</label>
                <input type="password" placeholder="Password" v-model="user.password">
                <div class="forgot" style="text-align: right">
                  <a href="#" @click="forget">忘记密码？Forget Password?</a>
                </div>
                <input type="submit" value="登录 | Login" @click="doLogin">
              </form>
              <hr/>
              <h5>第三方登录|Login Via Third Party</h5>
              <form>
                <div class="forgot">
                  <a href="#" @click="useQQ"> <img src="../../assets/img/social/qq.png" width="20px"/> QQ登录|QQ Login
                    &nbsp;&nbsp;</a>
                  <a href="#" @click=""> <img src="../../assets/img/social/wx.png" width="20px"/> 微信登录|WeChat Login
                    （即将开放）</a>
                </div>
              </form>
              <hr/>
              <h5>注册先锋账户|Registration</h5>
              <div class="forgot">
                <a href="#/register" @click="goToReg">点击注册 Register Here</a> 或者返回<a href="/">主页 Home Page<span
                class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //login -->
      <!--- /login ---->
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import md5 from 'js-md5'

  export default ({
    name: 'Login',
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
        loginError: false,
        tempToken: '',
        reset: false,
        showModal: false,
        msg: '',
        headerBgVariant: '',
        notSame: true,
        newPwd: '',
        basePath: basePath,
        login: true
      }
    },
    methods: {
      doLogin() {
        this.$validator.validateAll().then((result) => {
          if (!result)
            return;
          const loginUser = this.user;
          loginUser.password = md5(this.user.password);
          axios.post('/system/login', loginUser).then((response) => {
            if (response.data.code === 2001) {
              window.open(this.basePath + '/pcp#/login?token=' + response.data.data.access_token)
            } else {
              this.loginError = true
            }
          })
        })
      },
      useQQ() {
        axios.get('/system/login/qq').then((response) => {
          window.open(response.data.data);
        })
      },
      useWechat() {
        axios.get('/system/login/weChat').then((response) => {
          window.open(response.data.data);
        })
      },
      forget() {
        window.open(this.basePath + '/pcp#/reset')
      },
      goToReg() {
        this.$router.push({path: '/register'})
      },
      resetPassword() {
        this.$router.push({path: '/reset'})
      }
    }
  })
</script>


