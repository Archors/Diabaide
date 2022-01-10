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
    api(state) {
      return state.api;
    },
  },
});
//J'ai mangé tant d'unité ducoup ca fait
//Unité
//Poid de ce que je mange -> donne le
//ratio glucide unité international
//Parti manuel à faire absolument
