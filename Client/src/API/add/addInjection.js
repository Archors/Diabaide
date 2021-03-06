import axios from "axios";
import authHeader from "../authentification/authHeader";
import store from "../../store/index";
store.getters.config;
import { updateAPI } from "../updateAPI";

//Ajouter une injection en BDD
export async function addInjection(quantity) {
  var injectionObject = {
    quantity: quantity,
  };
  return axios({
    method: "post",
    url: process.env.VUE_APP_ROOT_API + "/history_injections/",
    data: injectionObject,
    headers: authHeader(),
  })
    .then(function (response) {
      updateAPI();
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
