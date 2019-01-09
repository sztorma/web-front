// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import config from './config'





Vue.use(Vuetify, {
  theme: {
    primary: '#FDD835',
    secondary: '#ff9800',
    accent: '#4caf50',
    error: '#673ab7',
    warning: '#e91e63',
    info: '#f44336',
    success: '#03a9f4'
  },
  iconfont: 'mdi'
}
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vuetify,  
  components: { App },
  template: '<App/>'
})
