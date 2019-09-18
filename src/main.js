import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import store from './store';
import AuthHandler from './components/AuthHandler';

// ROUTES
Vue.use(VueRouter); // initial "handshake" between Vue and VueRouter
const router = new VueRouter ({
  mode: 'history', // config to change from hashRouter -> browserRouter
  routes: [
    { path: '/oauth2/callback', component: AuthHandler}, // Path we want this RULE to define
  ]
});


// Vue Instance
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
