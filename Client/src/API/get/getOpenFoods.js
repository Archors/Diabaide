import axios from "axios";
import authHeader from "../authentification/authHeader";

//Appel API des donnees du meal
export async function getOpenFoods(barCode) {
  return axios.get(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (erreur) {
      //Affichage de l'erreur
      console.log(erreur);
    });
}