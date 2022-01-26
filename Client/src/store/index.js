import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    id: "61d8095482279396c5022ecf",
    user: {},
    value_open_food: {},
    value_meals: {},
    value_history_injections: {},
    value_timestamp_injections: {},
    history_meals: {},
    history_injections: {},
    timestamp_history_meals: {},
    real_history_meals: {},
    history_glycemias: {},
    value_history_glycemias: {},
    value_timestamp_glycemias: {},
    api: "urlapi",
    connection_status: 0, //-1 = to signUp   0 = toSignIn    1 = Connected
  },
  mutations: {
    ///LOGIN-----------------------------------------------------
    LOGIN_SUCCESS(state, accessToken = -1) {
      if (accessToken != -1) Vue.$cookies.set("token", accessToken, "1d");
      state.connection_status = 1;
    },
    DISCONNECT(state) {
      Vue.$cookies.remove("token");
      state.connection_status = 0;
      router.push({ path: "login" });
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
    ADD_VALUE_MEALS(state, value_meals) {
      state.value_meals.push(value_meals);
    },
    ///HISTORY MEALS----------------------------------------------------
    SET_HISTORY_MEALS(state, history_meals) {
      state.history_meals = history_meals;
    },
    SET_VALUE_HISTORY_MEALS(state, value_history_meals) {
      state.value_history_meals = value_history_meals;
    },
    SET_VALUE_TIMESTAMP_MEALS(state, value_timestamp_meals) {
      state.value_timestamp_meals = value_timestamp_meals;
    },
    REM_LAST_VALUE_HISTORY_MEALS(state) {
      state.value_meals.pop();
    },
    ///HISTORY GLYCEMIAS----------------------------------------------------
    SET_HISTORY_GLYCEMIAS(state, history_glycemias) {
      state.history_glycemias = history_glycemias;
    },
    ADD_GLYCEMIA(state, valueGlycemia) {
      var glycemia = {
        glycemia: valueGlycemia,
        timestamp: Date().toISOString(),
      };
      state.history_glycemias.push(glycemia);
    },
    REM_LAST_VALUE_HISTORY_GLYCEMIAS(state) {
      state.history_glycemias.pop();
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
    ADD_INJECTION(state, valueInjection) {
      var injection = {
        quantity: valueInjection,
        timestamp: Date().toISOString(),
      };
      state.history_injections.push(injection);
    },
    REM_LAST_VALUE_HISTORY_INJECTIONS(state) {
      state.history_injections.pop();
    },
    SET_VALUE_HISTORY_INJECTIONS(state, value_history_injections) {
      state.value_history_injections = value_history_injections;
    },
    SET_VALUE_TIMESTAMP_INJECTIONS(state, value_timestamp_injections) {
      state.value_timestamp_injections = value_timestamp_injections;
    },
    //OPEN FOOD-------------------------------------------------------------------
    SET_VALUE_OPEN_FOOD(state, value_open_food) {
      state.value_open_food = value_open_food;
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
    value_history_meals(state) {
      return state.value_history_meals;
    },
    value_timestamp_meals(state) {
      return state.value_timestamp_meals;
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
    ///OPEN FOOD -------------------------------------------------------
    value_open_food(state) {
      return state.value_open_food;
    },
    api(state) {
      return state.api;
    },
  },
});
