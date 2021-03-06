import Vue from "vue";
import axios from "axios";
import store from "../../store";
store.getters.config;

//Appel API des donnees sur les injections
export async function login(email, password) {
  Vue.$cookies.remove('token');
  return axios({
    method: "post",
    url: process.env.VUE_APP_ROOT_API + "/login",
    data: {
      email: email,
      password: password,
    },
  })
    .then(function (response) {
      store.commit("LOGIN_SUCCESS", response.data.accessToken);
      return 1;
    })
    .catch(function (error) {
      //Affichage de l'erreur
      console.log(error);
      return 0;
    });
}
