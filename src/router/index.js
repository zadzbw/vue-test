import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../pages/HomePage';

// async
const DividerPage = () => import(/* webpackChunkName: "divider" */'../pages/DividerPage');
const LoadingPage = () => import(/* webpackChunkName: "loading" */'../pages/LoadingPage');
const TodoListPage = () => import(/* webpackChunkName: "todoList" */'../pages/TodoListPage');
const TransitionPage = () => import(/* webpackChunkName: "transition" */'../pages/TransitionPage');
const VuexPage = () => import(/* webpackChunkName: "vuex" */'../pages/VuexPage/VuexPage');
const VuexRootPage = () => import(/* webpackChunkName: "vuex-root" */'../pages/VuexPage/VuexRootPage');
const TodoPage = () => import(/* webpackChunkName: "vuex-TodoL" */'../pages/VuexPage/TodoPage');
const CountPage = () => import(/* webpackChunkName: "vuex-count" */'../pages/VuexPage/CountPage');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '*', component: { template: '<div style="font-size: 20px;">Not Found 404</div>' } },
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
    {
      path: '/todo-list',
      name: 'todo-list',
      component: TodoListPage,
    },
    {
      path: '/transition',
      name: 'transition',
      component: TransitionPage,
    },
    {
      path: '/vuex',
      component: VuexPage,
      children: [
        {
          path: '',
          name: 'vuex',
          component: VuexRootPage,
        },
        {
          path: 'count',
          name: 'count',
          component: CountPage,
        },
        {
          path: 'todo',
          name: 'todo',
          component: TodoPage,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  next();
});

export default router;
