import api from '../../api/imgur';

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