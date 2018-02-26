import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../pages/HomePage';
import LoadingPage from '../pages/LoadingPage';

// async
const DividerPage = () => import(/* webpackChunkName: "divider" */'../pages/DividerPage');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/loading',
      name: 'loading',
      component: LoadingPage,
    },
    {
      path: '/divider',
      name: 'divider',
      component: DividerPage,
    },
  ],
});
