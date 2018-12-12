// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(Vuetify, {
  iconfont: 'mdi'
 })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vuetify,
  components: { App },
  template: '<App/>'
})
