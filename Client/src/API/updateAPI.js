import store from '../store'
store.getters.config
import { getUser } from "../API/getUser";

//Appel API des donnees du user
export async function updateAPI(id = store.getters.id) {
    store.commit("SET_USER", await getUser(id));
}