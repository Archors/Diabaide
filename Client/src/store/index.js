import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    id: "61d8095482279396c5022ecf",
    user: {},
    value_meals : {},
    value_history_injections: {},
    value_timestamp_injections: {},
    history_meals: {},
    history_glycemias: {},
    value_history_glycemias: {},
    value_timestamp_glycemias : {},
    api: "urlapi",
    connection_status: 0, //-1 = to signUp   0 = toSignIn    1 = Connected
  },
  mutations: {
    LOGIN_SUCCESS(state, accessToken = -1) {
      console.log("Connected");
      if (accessToken != -1) Vue.$cookies.set("token", accessToken, "1d");
      state.connection_status = 1;
      router.push({ path: "home" }).catch(() => {
        /* ignore */
      });
    },
    DISCONNECT(state) {
      state.connection_status = 0;
    },
    LOGIN_TO_SIGNUP(state) {
      state.connection_status = -1;
    },
    LOGIN_TO_SIGNIN(state) {
      state.connection_status = 0;
    },
    ///USER----------------------------------------------------
    SET_ID(state, id) {
      state.id = id;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    ///MEALS----------------------------------------------------
    SET_VALUE_MEALS(state, value_meals) {
      state.value_meals = value_meals;
    },
    ///HISOTRY MEALS----------------------------------------------------
    SET_HISTORY_MEALS(state, history_meals) {
      state.history_meals = history_meals;
    },
    ///HISTORY GLYCEMIAS----------------------------------------------------
    SET_HISTORY_GLYCEMIAS(state, history_glycemias) {
      state.history_glycemias = history_glycemias;
    },
    SET_VALUE_HISTORY_GLYCEMIAS(state, value_history_glycemias) {
      state.value_history_glycemias = value_history_glycemias;
    },
    SET_VALUE_TIMESTAMP_GLYCEMIAS(state, value_timestamp_glycemias) {
      state.value_timestamp_glycemias = value_timestamp_glycemias;
    },
    ///HISTORY INJECTIONS----------------------------------------------------
    SET_HISTORY_INJECTIONS(state, history_injections) {
      state.history_injections = history_injections;
    },
    SET_VALUE_HISTORY_INJECTIONS(state, value_history_injections) {
      state.value_history_injections = value_history_injections;
    },
    SET_VALUE_TIMESTAMP_INJECTIONS(state, value_timestamp_injections) {
      state.value_history_injections = value_timestamp_injections;
    },
  },
  actions: {},
  modules: {},
  getters: {
    connection_status(state) {
      return state.connection_status;
    },
    isLoggedIn(state) {
      if (state.connection_status == 1) return true;
      else false;
    },
    token(state) {
      return state.token;
    },
    ///USER----------------------------------------------------
    id(state) {
      return state.id;
    },
    user(state) {
      return state.user;
    },
    ///MEALS----------------------------------------------------
    value_meals(state) {
      return state.value_meals;
    },
    ///HISTORY MEALS----------------------------------------------------
    history_meals(state) {
      return state.history_meals;
    },
    ///HISTORY GLYCEMIA----------------------------------------------------
    history_glycemias(state) {
      return state.history_glycemias;
    },
    value_history_glycemias(state) {
      return state.value_history_glycemias;
    },
    value_timestamp_glycemias(state) {
      return state.value_timestamp_glycemias;
    },
    ///HISTORY INJECTIONS----------------------------------------------------
    history_injections(state) {
      return state.history_injections;
    },
    value_history_injections(state) {
      return state.value_history_injections;
    },
    value_timestamp_injections(state) {
      return state.value_timestamp_injections;
    },
    api(state) {
      return state.api;
    },
  },
});
