import axios from "axios";
import authHeader from "../authentification/authHeader";
import store from "../../store/index";
store.getters.config;
import { updateAPI } from "../updateAPI";

//Supprimer la derniere glycemie en BDD
export async function delMeal() {
  return axios({
    method: "delete",
    url: process.env.VUE_APP_ROOT_API + "/meals/",
    headers: authHeader(),
  })
    .then(function (response) {
      store.commit("REM_LAST_VALUE_HISTORY_MEALS");
      updateAPI();
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
