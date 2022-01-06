import axios from "axios";

//Ajouter/modifier un candidat en BDD via API
export async function addUserAPI(user: any) {
  var userJSON = JSON.stringify(user);
  return axios({
    method: "post",
    url: "",
    data: userJSON,
  })
    .then(function (response: any) {
      return response;
    })
    .catch(function (erreur: any) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
