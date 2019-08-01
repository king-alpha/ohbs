import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/now-selling',
      component: require('@/components/NowSelling').default
    },
    {
      path: '/services',
      component: require('@/components/Services').default
    },
    {
      path: '/property-description',
      component: require('@/components/PropertyDescription').default
    }
  ],
  mode: 'history'
});
