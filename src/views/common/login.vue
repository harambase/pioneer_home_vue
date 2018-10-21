<template>
  <div class="animated fadeIn">
    <section class="login-page">
      <div class="inner-banner demo-2 text-center">
        <div id="breadcrumb_wrapper">
          <div class="container">
            <h2>Login</h2>
            <h6>登录先锋</h6>
          </div>
        </div>
      </div>
      <!--- login ---->
      <!-- login -->
      <div class="login">
        <div class="container">
          <h3>请登录 Login Here</h3>
          <p class="est"><br>获取登录用户ID，请联系管理员。 Please Contact system admin to acquire credentials.</p>
          <div class="login-form-grids">
            <form>
              <label class="test-info">用户ID User ID <span>*</span></label>
              <input type="text" v-model="user.username">
              <div class="clearfix"></div>
              <label class="test-info">密码 Password <span>*</span></label>
              <input type="password" placeholder="Password" v-model="user.password">
              <div class="clearfix"></div>
              <div class="forgot">
                <a href="#">忘记密码请联系管理员 If you forgot Password, please contact system admin.</a>
              </div>
              <input type="submit" value="Login" @click="doLogin">
            </form>
            <h4>还没有先锋账号？For New People</h4>
            <p><a href="#/register" @click="goToReg">点击注册 Register Here</a> 或者返回(or) go to <a href="/">主页 Home Page<span
              class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></p>

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
  import decode from 'jwt-decode'

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
        newPwd: ''
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
              if (this.user.password === md5('Pioneer123456')) {
                this.tempToken = response.data.data.access_token;
                this.reset = true;
                let userId = decode(this.tempToken).sub;
                axios.get('/system/user/verify/' + userId + '?token=' + this.tempToken).then(response => {
                  this.user = response.data.data;
                  this.user.password = '';
                  this.user.qq = '';
                  this.user.tel = '';
                  this.user.birthday = '';
                  this.user.email = '';
                })
              }
              else {
                window.localStorage.setItem('access_token', response.data.data.access_token);
                token = response.data.data.access_token;
                this.$router.push({path: '/eas#/dashboard'})
              }
            } else {
              this.loginError = true
            }
          })
        })
      },
      goToReg() {
        this.$router.push({path: '/register'})
      },
      resetPassword() {
        this.$router.push({path: '/resetPassword'})
      }
    }
  })
</script>


