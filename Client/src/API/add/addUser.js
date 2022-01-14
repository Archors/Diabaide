import axios from "axios";

//Ajouter un user en BDD
export async function addUserAPI(user) {
  var userJSON = JSON.stringify(user);
  return axios({
    method: "post",
    url: process.env.VUE_APP_ROOT_API + "/user/",
    data: userJSON,
  })
    .then(function (response) {
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}