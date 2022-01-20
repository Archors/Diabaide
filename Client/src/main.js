import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import './assets/style.css';
import Chart from 'vue-frappe-chart'


Vue.config.productionTip = false;
Vue.use(Chart);

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
