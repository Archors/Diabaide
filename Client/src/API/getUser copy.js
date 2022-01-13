import axios from "axios";

//Appel API des donnees du user
export function getUser(id) {
  user : null
  axios.get(process.env.VUE_APP_ROOT_API + "/users/" + id).then((response) => {
    this.user = response.data;
  });
  return user
}
