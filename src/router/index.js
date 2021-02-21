import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/collect',
    name: 'Collect',
    component: () => import(/* webpackChunkName: "collect" */ '../views/Collect.vue'),
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import(/* webpackChunkName: "watch" */ '../views/Watch.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
