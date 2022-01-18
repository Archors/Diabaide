import store from '../store'
store.getters.config
import { login } from "./authentification/login";
import { getUser } from "./get/getUser";
import { getGlycemias } from "../API/get/getGlycemias";
import { getMeals } from "../API/get/getMeals";
import { getInjections } from "../API/get/getInjections";

//Met a jour les donnes dans l'application
export async function updateAPI(id = store.getters.id) {
    await login("naruto@gmail.com", "Hinata");
    /*store.commit("SET_USER", await getUser(id));
    store.commit("SET_HISTORY_GLYCEMIAS", await getGlycemias(id));
    store.commit("SET_VALUE_HISTORY_GLYCEMIAS", store.getters.history_glycemias.map(({glycemias}) => glycemias));
    store.commit("SET_HISTORY_MEALS", await getMeals(id));
    store.commit("SET_HISTORY_INJECTIONS", await getInjections(id));*/
}