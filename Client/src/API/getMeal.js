import axios from "axios";

//Appel API des donnees du meal
export async function getMeal(id) {
  try {
    const res = await axios.get(process.env.VUE_APP_ROOT_API + "/history_meals/" + id);
    return res.data;
  } catch (e) {
    console.log("erreur " + e);
  }
}
