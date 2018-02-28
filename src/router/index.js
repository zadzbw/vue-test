import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../pages/HomePage';

// async
const DividerPage = () => import(/* webpackChunkName: "divider" */'../pages/DividerPage');
const LoadingPage = () => import(/* webpackChunkName: "loading" */'../pages/LoadingPage');
const TodoListPage = () => import(/* webpackChunkName: "todoList" */'../pages/TodoListPage');

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
    {
      path: '/todo-list',
      name: 'todo-list',
      component: TodoListPage,
    },
  ],
});
