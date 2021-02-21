import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isloading: false,
  },
  mutations: {
    SET_LOADING(state, boolean) {
      state.isloading = boolean;
    },
  },
  actions: {
    setloading({ commit }, payload) {
      commit('SET_LOADING', payload);
    },
  },
  modules: {
  },
});
