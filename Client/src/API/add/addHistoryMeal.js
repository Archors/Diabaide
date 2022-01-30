import axios from "axios";
import authHeader from "../authentification/authHeader";
import store from "../../store/index";
store.getters.config;
import { updateAPI } from "../updateAPI";

//Ajouter un meal en BDD
export async function addHistoryMeal(meals, glucide) {
  var mealJSON = {
    meal: meals,
    glucides : glucide
  };
  return axios({
    method: "post",
    url: process.env.VUE_APP_ROOT_API + "/history_meals/",
    data: mealJSON,
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
