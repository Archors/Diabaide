import axios from "axios";

//Appel API des donnees sur les injections
export async function getInjection(id) {
  try {
    const res = await axios.get(process.env.VUE_APP_ROOT_API + "/history_injection/" + id);
    return res.data;
  } catch (e) {
    console.log("erreur " + e);
  }
}
