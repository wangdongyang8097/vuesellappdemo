import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import store from './store';

Vue.use(VueResource);

Vue.config.productionTip = false;

import './common/stylus/index.styl';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
