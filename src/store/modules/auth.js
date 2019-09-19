import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token')
  // When the app starts we look into the localstorage to see if we already have a token
  // getItem('nameOfItem) -> to access the info
};


const getters = {
  isLoggedIn: state => !!state.token // !! transforms the value into a BOOLEAN depending on the authentication of the user
};


// the commit argument is a FUNCTION used to call the mutations defined.   --> mutations.setToken() BAD!
//    commit('mutation', argumentPassedToMutation)
const actions = {
  logout: ({ commit }, ) => {
    commit('setToken', null); // logout => (token = null)
    window.localStorage.removeItem('imgur_token'); // to remove an item from localStorage -> removeItem('NameOfItem')
  },

  login: () => {
    api.login();
  },

  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    // setItem('nameOfItem', infoWeWantToStore) -> to update ITEM
    router.push('/');

  },


};


const mutations = {
  setToken: (state, token) => {
    state.token = token; // update the token VALUE
  }
};



export default {
  state,
  getters,
  actions,
  mutations
};