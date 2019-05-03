import Vue from 'vue/dist/vue.esm';
import router from './router';
import App from '../app';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
