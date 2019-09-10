import Vue from 'vue'
import App from './App.vue'
// import HUI from 'hui';
// import layout from '@hui-pro/layout';
// import '@hui-pro/layout/theme/index.scss';

// Vue.use(HUI);
// Vue.use(layout);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
