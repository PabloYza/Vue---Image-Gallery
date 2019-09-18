import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: null
};


const getters = {
  isLoggedIn: state => !!state.token // !! transforms the value into a BOOLEAN
};


// the commit argument is a FUNCTION used to call the mutations defined.   --> mutations.setToken() BAD!
//    commit('mutation', argumentPassedToMutation)
const actions = {
  logout: ({ commit }, ) => {
    commit('setToken', null); // logout => (token = null)
  },

  login: () => {
    api.login();
  },

  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
    console.log(query);
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