import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

Vue.use(Vuex); // Connection between the 2 libraries
// STORE - overall collection of state, modules, getters & actions

export default new Vuex.Store({
  modules: {
    auth,
  },
});