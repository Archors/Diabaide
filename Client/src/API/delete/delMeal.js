import axios from "axios";
import authHeader from "../authentification/authHeader";

//Supprimer la derniere glycemie en BDD
export async function delMeal() {
  return axios({
    method: "delete",
    url: process.env.VUE_APP_ROOT_API + "/meals/",
    headers: authHeader(),
  })
    .then(function (response) {
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
