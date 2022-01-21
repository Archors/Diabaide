import Vue from "vue";
import router from "../../router";
import store from "../../store";
store.getters.config;

//Appel API des donnees sur les injections
export function logout() {
    Vue.$cookies.remove("token");
    store.commit("DISCONNECT");
    router.push('/login')
}
