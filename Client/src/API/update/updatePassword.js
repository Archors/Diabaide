import axios from "axios";

export async function updatePassword(oldPassword, password) {
  return axios({
    method: "put",
    url: process.env.VUE_APP_ROOT_API + "/users/password",
    data: {
      oldPassword,
      password,
    },
    headers: authHeader(),
  })
    .then(function (response) {
      console.log("password modified");
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
