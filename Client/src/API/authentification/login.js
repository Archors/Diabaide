import axios from "axios";
import store from "../../store";
store.getters.config;

//Appel API des donnees sur les injections
export async function login(email, password) {
  var test = {
    email : email,
    password : password
  }
  return axios({
    method: "post",
    url: process.env.VUE_APP_ROOT_API + "/login",
    data: test
  })
    .then(function (response) {
      that.$store.commit("LOGIN_SUCCESS", response.data);
      //localStorage.setItem("token", JSON.stringify(response.data));
    })
    .catch(function (error) {
      //Affichage de l'erreur
      console.log("ici")
      console.log(error);
    });
}
