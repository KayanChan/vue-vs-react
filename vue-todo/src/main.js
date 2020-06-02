// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@babel/polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
// 全局注册组件
Vue.component('myGlobalComponent', {
  template: '<div>{{msg}}</div>',
  data () {
    return {
      msg: 'myGlobalComponent'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
