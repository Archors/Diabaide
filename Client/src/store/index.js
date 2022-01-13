import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: "61d8095482279396c5022ecf",
    user: {},
    history_injection: {
      id_user: "",
      date: "",
      quantity: "",
    },
    history_meal: {
      id_user: "",
      weaight: "",
      date: "",
    },
    history_glycemie: {
      id_user: "1",
      glycemie: [1, 2, 3],
    },
    api: "urlapi",
  },
  mutations: {
    SET_ID(state, payload) {
      state.id = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_HISTORY_INJECTION(state, payload) {
      state.history_injection = payload;
    },
    SET_HISTORY_MEAL(state, payload) {
      state.history_meal = payload;
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
    history_injection(state) {
      return state.history_injection;
    },
    history_meal(state) {
      return state.history_meal;
    },
    history_glycemie(state) {
      return state.history_glycemie;
    },
    api(state) {
      return state.api;
    },
  },
});
