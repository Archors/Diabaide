import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: "61d8095482279396c5022ecf",
    user: {},
    history_injections: {},
    history_meals: {},
    history_glycemias: {},
    value_history_glycemias: {},
    api: "urlapi",
  },
  mutations: {
    SET_ID(state, payload) {
      state.id = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_HISTORY_INJECTIONS(state, payload) {
      state.history_injections = payload;
    },
    SET_HISTORY_MEALS(state, payload) {
      state.history_meals = payload;
    },
    SET_HISTORY_GLYCEMIAS(state, payload) {
      state.history_glycemias = payload;
    },
    SET_VALUE_HISTORY_GLYCEMIAS(state, payload) {
      state.history_glycemias = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    id(state) {
      return state.id;
    },
    user(state) {
      return state.user;
    },
    history_injections(state) {
      return state.history_injections;
    },
    history_meals(state) {
      return state.history_meals;
    },
    history_glycemies(state) {
      return state.history_glycemias;
    },
    value_history_glycemias(state) {
      return state.value_history_glycemias;
    },
    api(state) {
      return state.api;
    },
  },
});
