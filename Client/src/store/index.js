import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 1,
      first_name: "test",
      last_name: "test",
      birthdate: "",
      email: "",
      password: "",
      ratio: "",
    },
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
      glycemie: [1, 2, 3]
    },
    api: "urlapi",
  },
  mutations: {
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
