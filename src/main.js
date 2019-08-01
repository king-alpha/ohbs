import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import semanticUiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false;
// Vue.use(semanticUiVue);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
