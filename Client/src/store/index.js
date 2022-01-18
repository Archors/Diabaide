import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    id: "61d8095482279396c5022ecf",
    user: {},
    history_injections: {},
    history_meals: {},
    history_glycemias: {},
    value_history_glycemias: {},
    api: "urlapi",
  },
  mutations: {
    LOGIN_SUCCESS(state, data) {
      state.token = data.token;
    },
    SET_ID(state, id) {
      state.id = id;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_HISTORY_INJECTIONS(state, history_injections) {
      state.history_injections = history_injections;
    },
    SET_HISTORY_MEALS(state, history_meals) {
      state.history_meals = history_meals;
    },
    SET_HISTORY_GLYCEMIAS(state, history_glycemias) {
      state.history_glycemias = history_glycemias;
    },
    SET_VALUE_HISTORY_GLYCEMIAS(state, value_history_glycemias) {
      state.history_glycemias = value_history_glycemias;
    },
  },
  actions: {},
  modules: {},
  getters: {
    token(state) {
      return state.token;
    },
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
