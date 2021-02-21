import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import http from './assets/js/https';
import * as filters from './assets/js/filter';

Vue.config.productionTip = false;

Vue.prototype.$http = http;

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
