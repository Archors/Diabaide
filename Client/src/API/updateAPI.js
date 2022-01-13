import store from '../store'
store.getters.config
import { getUser } from "../API/getUser";
import { getGlycemie } from "../API/getGlycemie";
import { getMeal } from "../API/getMeal";
import { getInjection } from "../API/getInjection";

//Appel API des donnees du user
export async function updateAPI(id = store.getters.id) {
    store.commit("SET_USER", await getUser(id));
    store.commit("SET_HISTORY_GLYCEMIE", await getGlycemie(id));
    store.commit("SET_HISTORY_MEAL", await getMeal(id));
    store.commit("SET_HISTORY_INJECTION", await getInjection(id));
}