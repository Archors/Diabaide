import axios from "axios";

//Appel API des donnees sur la glycemie
export async function getGlycemie(id) {
  try {
    const res = await axios.get(process.env.VUE_APP_ROOT_API + "/history_glycemie/" + id);
    return res.data;
  } catch (e) {
    console.log("erreur " + e);
  }
}
