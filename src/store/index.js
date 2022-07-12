import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticatedUser: {
      loggedIn: false,
      name: '',
      id: undefined,
    },
  },
  getters: {
    isLoggedIn (state) {
      return state.authenticatedUser.loggedIn;
    },
    isLoggedOut (state) {
      return !state.authenticatedUser.loggedIn;
    },
    userName (state) {
      return state.authenticatedUser.name;
    },
    userId (state) {
      return state.authenticatedUser.id;
    }
  },
  mutations: {
    setLoggedIn (state, { value }) {
      state.authenticatedUser.loggedIn = value;
    },
    setAuthenticatedUser (state, { name, id }) {
      state.authenticatedUser.name = name;
      state.authenticatedUser.id = id;
    },
  },
  actions: {
    login ({ commit }, { name, id }) {
      commit('setLoggedIn', { value: true });
      commit('setAuthenticatedUser', { name, id });
      localStorage.setItem('authenticatedUser', JSON.stringify({ name, id }));
    },
    logout ({ commit }) {
      commit('setLoggedIn', { value: false });
      commit('setAuthenticatedUser', { name: '', id: undefined });
      localStorage.removeItem('authenticatedUser');
    },
  },
});