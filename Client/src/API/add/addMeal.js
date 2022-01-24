import axios from "axios";

//Ajouter un meal en BDD
export async function addMeal(meal) {
  var mealJSON = JSON.stringify(meal);
  return axios({
    method: "post",
    url: process.env.VUE_APP_ROOT_API + "/meals/",
    data: mealJSON,
    headers: authHeader()
  })
    .then(function (response) {
      store.commit("ADD_VALUE_MEALS", meal)
      return response;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}
