import axios from "axios";

//Appel API des donnees du user
export async function getUser(id) {
  try {
    const res = await axios.get(process.env.VUE_APP_ROOT_API + "/users/" + id);
    return res.data;
  } catch (e) {
    console.log("erreur " + e);
  }
}
