import store from '../store'
store.getters.config
import { getUser } from "../API/get/getUser";
import { getGlycemie } from "../API/get/getGlycemie";
import { getMeal } from "../API/get/getMeal";
import { getInjection } from "../API/get/getInjection";

//Met a jour les donnes dans l'application
export async function updateAPI(id = store.getters.id) {
    store.commit("SET_USER", await getUser(id));
    store.commit("SET_HISTORY_GLYCEMIE", await getGlycemie(id));
    store.commit("SET_HISTORY_MEAL", await getMeal(id));
    store.commit("SET_HISTORY_INJECTION", await getInjection(id));
}