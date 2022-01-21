import axios from "axios";

export async function reset() {
  console.log("reset effectue");
  return axios({
    method: "get",
    url: process.env.VUE_APP_ROOT_PUMP + "?reset=",
  })
    .then(function (response) {
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
