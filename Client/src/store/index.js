import Vue from "vue";
import Vuex from "vuex";
import router from '../router/index'

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
    connection_status: 0 //-1 = to signUp   0 = toSignIn    1 = Connected
  },
  mutations: {
    LOGIN_SUCCESS(state, accessToken) {
      console.log("Connected");
      localStorage.setItem("token", JSON.stringify(accessToken));
      state.connection_status = 1;
      router.push({ path: 'home' }).catch(() => { /* ignore */ })
    },
    DISCONNECT(state){
      state.connection_status = 0;
    },
    LOGIN_TO_SIGNUP(state) {
      state.connection_status = -1;
    },
    LOGIN_TO_SIGNIN(state) {
      state.connection_status = 0;
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
      state.value_history_glycemias = value_history_glycemias;
    },
  },
  actions: {},
  modules: {},
  getters: {
    connection_status(state) {
      return state.connection_status;
    },
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
    history_glycemias(state) {
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
