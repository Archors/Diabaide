import axios from "axios";
import authHeader from "../authentification/authHeader";

//Supprimer la derniere glycemie en BDD
export async function delGlycemia() {
  return axios({
    method: "delete",
    url: process.env.VUE_APP_ROOT_API + "/history_glycemias/",
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
