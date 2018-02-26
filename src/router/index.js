import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import LoadingPage from '../pages/LoadingPage';

const About = () => import(/* webpackChunkName: "about" */'../pages/About');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/loading',
      name: 'loading',
      component: LoadingPage,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
