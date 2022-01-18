import axios from "axios";
import store from "../../store";
store.getters.config;

//Appel API des donnees sur les injections
export async function login(email, password) {
  return axios({
    method: "post",
    url: process.env.VUE_APP_ROOT_API + "/login",
    data: {
      email: email,
      password: password,
    },
  })
    .then(function (response) {
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
    })
    .catch(function (error) {
      //Affichage de l'erreur
      console.log(error);
    });
}
