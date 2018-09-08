import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
