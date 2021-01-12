import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VeeValidate from 'vee-validate'
import { extend } from 'vee-validate';
import App from './App'
import router from './router'
import axios from 'axios'

Vue.use(ElementUI);
Vue.use(VeeValidate, {fieldsBagName: 'formFields'});

token = window.localStorage.getItem('access_token');

axios.defaults.baseURL = basePath;
axios.interceptors.request.use(
  config => {
    if (token !== null && token !== undefined) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  });


VeeValidate.Validator.extend('verify_password', {
  getMessage: field => `密码必须包含： 至少一个大写字母，一个小写字母，和一个数字`,
  validate: value => {
    let strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
    return strongRegex.test(value)
  }
});


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
