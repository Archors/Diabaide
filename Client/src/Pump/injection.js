import axios from "axios";

export async function injection(quantity = 0) {
  console.log("Injection effectue");
  return axios({
    method: "get",
    url: process.env.VUE_APP_ROOT_PUMP + "?inject=" + quantity,
  })
    .then(function (response) {
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
