import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';

Vue.use(Vuex); // Connection between the 2 libraries
// STORE - overall collection of state, modules, getters & actions

export default new Vuex.Store({
  modules: {
    auth, // thanks to this we can access the state inside of the auth module -> rootState.auth.<nameOfProperty>
    images
  },
});