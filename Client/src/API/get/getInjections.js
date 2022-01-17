import axios from "axios";

//Appel API des donnees sur les injections
export async function getInjections(id) {
  var idJSON = JSON.stringify({ userid: id });
  return axios({
    method: "get",
    url: process.env.VUE_APP_ROOT_API + "/history_injections/",
    data: idJSON,
  })
    .then(function (response) {
      console.log(response.data)
      return response.data;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
