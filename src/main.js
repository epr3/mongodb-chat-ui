import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bulma';

Vue.config.productionTip = false;

store.dispatch('user/checkAuth');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
