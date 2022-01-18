import axios from "axios";
import authHeader from "../authentification/authHeader";

//Appel API des donnees du user
export async function getUser() {
  return axios({
    method: "get",
    url: process.env.VUE_APP_ROOT_API + "/users/",
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
