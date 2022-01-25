import axios from "axios";
import authHeader from "../authentification/authHeader";
import store from "../../store/index";
store.getters.config;
import { updateAPI } from "../updateAPI";

//Supprimer la derniere glycemie en BDD
export async function delInjection() {
  return axios({
    method: "delete",
    url: process.env.VUE_APP_ROOT_API + "/history_injections/",
    headers: authHeader(),
  })
    .then(function (response) {
      store.commit("REM_LAST_VALUE_HISTORY_INJECTIONS");
      updateAPI();
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
