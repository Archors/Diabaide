import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import { VFrappeChart } from 'vue-frappe-chart'

export default {
  components: {
    VFrappeChart
  }
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  axios,
  VFrappeChart,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
