import axios from "axios";
import authHeader from "../authentification/authHeader";
import store from "../../store";
store.getters.config;

//Appel API des donnees sur les injections
export async function getInjections(id) {
  return axios({
    method: "get",
    url: process.env.VUE_APP_ROOT_API + "/history_injections/",
    headers: authHeader(),
  })
    .then(function (response) {
      store.commit("SET_HISTORY_INJECTIONS", response.data);
      return response.data;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
