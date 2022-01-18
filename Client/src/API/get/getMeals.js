import axios from "axios";
import authHeader from "../authentification/authHeader";

//Appel API des donnees du meal
export async function getMeals() {
  return axios({
    method: "get",
    url: process.env.VUE_APP_ROOT_API + "/history_meals/",
    headers: authHeader()
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
