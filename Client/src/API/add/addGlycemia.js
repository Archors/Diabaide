import axios from "axios";
import authHeader from "../authentification/authHeader";
import store from "../../store/index";
store.getters.config;
import { updateAPI } from "../updateAPI";

//Ajouter une glycemie en BDD
export async function addGlycemia(glycemia) {
  var glycemiaArray = {
    glycemia: glycemia,
  };
  return axios({
    method: "post",
    url: process.env.VUE_APP_ROOT_API + "/history_glycemias/",
    data: glycemiaArray,
    headers: authHeader(),
  })
    .then(function (response) {
      store.commit("ADD_GLYCEMIA", glycemia);
      updateAPI();
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
