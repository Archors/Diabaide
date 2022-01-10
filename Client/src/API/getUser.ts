import axios from "axios";

//Appel API de la liste des candidats
export async function getUserAPI() {
  try {
    const res = await axios.get("");
    return res.data;
  } catch (e) {
    console.log("erreur " + e);
  }
}
