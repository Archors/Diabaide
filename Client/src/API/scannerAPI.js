import store from '../store'
store.getters.config
import { getOpenFood } from "./get/getOpenFoods";

//Met a jour les donnes dans l'application
export async function OpenFood(barCode) {
    store.commit("SET_VALUE_OPEN_FOOD",await getOpenFoods(barCode));
}
