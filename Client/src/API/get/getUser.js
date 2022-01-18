import axios from "axios";

//Appel API des donnees du user
export async function getUser(token) {
  //var idJSON = JSON.stringify({ userid: id });
  return axios({
    method: "get",
    url: process.env.VUE_APP_ROOT_API + "/users/",
    data: idJSON,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
