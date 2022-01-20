import axios from "axios";
import authHeader from "../authentification/authHeader";

export async function updateUser(user) {
  return axios({
    method: "put",
    url: process.env.VUE_APP_ROOT_API + "/users/",
    data: user,
    headers: authHeader(),
  })
    .then(function (response) {
      console.log("user modified");
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
