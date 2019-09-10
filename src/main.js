import Vue from 'vue'
import App from './App.vue'
import HUI from 'hui';
import 'hui/lib/hui.css';
import router from './router'

Vue.use(HUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
