// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'animate.css';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App';
import store from './vuex/store';
import router from './router';
import './style/main.scss';

sync(store, router);
Vue.config.productionTip = false;
window.Vue = Vue;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
