import axios from "axios";
import store from '../store'
store.getters.config

//Ajouter un meal en BDD
export async function addMealAPI(meal, id = store.getters.id) {
  var mealJSON = JSON.stringify(meal);
  return axios({
    method: "post",
    url: process.env.VUE_APP_ROOT_API + "/meals/" + id,
    data: mealJSON,
  })
    .then(function (response) {
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
