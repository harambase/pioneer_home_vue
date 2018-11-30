<template>
  <section class="error" v-if="isInvalid">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>404-错误页面 ERROR!</h2>
          <h6>该页面无法访问！Cannot access this page.</h6>
        </div>
      </div>
    </div>
    <!--- 404 ---->
    <div class="hd-content">
      <div class="container">
        <div class="page_404 text-center">
          <h3>404</h3>
          <p>无法找到页面！Oops! It seems like the page you were looking for has not been found. 请返回，Please go back.</p>
        </div>
      </div>
    </div>
    <!--- /404 ---->
  </section>
  <router-view v-else> </router-view>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      isInvalid() {
        return (!this.$route.matched || this.$route.matched.length === 0)
      }
    },
    methods: {
      backToDashBoard() {
        this.$router.push({path: '/dashboard'})
      }
    }
  }
</script>

<style>
  $ fa-font-path:  '~font-awesome/fonts/'  ;
  @import '~font-awesome/css/font-awesome.min.css';
</style>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
