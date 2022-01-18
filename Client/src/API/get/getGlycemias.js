import axios from "axios";

//Appel API des donnees sur la glycemie
export async function getGlycemias(id) {
  var idJSON = JSON.stringify({ userid: id });
  return axios({
    method: "get",
    url: process.env.VUE_APP_ROOT_API + "/history_glycemias/",
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
