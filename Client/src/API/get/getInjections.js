import axios from "axios";
import authHeader from "../authentification/authHeader";

//Appel API des donnees sur les injections
export async function getInjections(id) {
  return axios({
    method: "get",
    url: process.env.VUE_APP_ROOT_API + "/history_injections/",
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
