import Vue from 'vue/dist/vue.esm';
import Router from 'vue-router';
import Top from '../pages/top';
import RegistSpot from '../pages/regist_spot';

Vue.use(Router);

export default new Router ({
  router: [
    {
      path:'/',
      name:'Top',
      component: Top
    },
    {
      path:'/regist_spot',
      name: 'RegistSpot',
      component: RegistSpot
    }
  ]
});
