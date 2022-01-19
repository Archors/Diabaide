import axios from "axios";

//Ajouter un user en BDD
export async function addUser(user) {
  return axios({
    method: "post",
    url: process.env.VUE_APP_ROOT_API + "/users/",
    data: user,
  })
    .then(function (response) {
      console.log("user ajoute")
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}