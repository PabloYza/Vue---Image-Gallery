import api from '../../api/imgur';



const state = {
  images: []
};


const getters = {
  allImages: (state) => state.images
};

//rootState allows us to reach into other modules and access data inside them
//
const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
    console.log(response);
  },
  uploadImage(){}
};


const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};