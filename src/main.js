import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';


// ROUTES
Vue.use(VueRouter); // initial "handshake" between Vue and VueRouter
export const router = new VueRouter ({
  mode: 'history', // config to change from hashRouter -> browserRouter
  routes: [
    { path: '/', component: ImageList },
    { path: '/oauth2/callback', component: AuthHandler }, // Path we want this RULE to define
    { path: '/upload', component: UploadForm }

  ]
});


// Vue Instance
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
