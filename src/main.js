import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'
Vue.use(router);
Vue.config.productionTip = false

import axios from 'axios';
Vue.prototype.$axios = axios;
import QS from 'qs'
Vue.prototype.qs = QS;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
