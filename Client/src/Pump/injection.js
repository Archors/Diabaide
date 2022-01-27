import axios from "axios";

export async function injection(quantity = 0) {
  return axios({
    method: "get",
    url: "http://192.168.143.86?inject=" + quantity,
  })
    .then(function (response) {
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
