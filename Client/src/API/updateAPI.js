import store from '../store'
store.getters.config
import { getUser } from "./get/getUser";
import { getGlycemias } from "../API/get/getGlycemias";
import { getMeals } from "../API/get/getMeals";
import { getInjections } from "../API/get/getInjections";

//Met a jour les donnes dans l'application
export async function updateAPI() {
    store.commit("SET_USER", await getUser());
    store.commit("SET_HISTORY_GLYCEMIAS", await getGlycemias());
    store.commit("SET_VALUE_HISTORY_GLYCEMIAS", getLastDay());
    /*store.commit("SET_HISTORY_MEALS", await getMeals());
    store.commit("SET_HISTORY_INJECTIONS", await getInjections());*/
}


 function  getLastDay () {
    var arrayglycemia = [];
    var yesterday = new Date(new Date() - (24 * 60 * 60 * 1000)).toISOString();
    store.getters.history_glycemias.forEach(element => {
        if(element.timestamp > yesterday) {
            arrayglycemia.push(parseInt(element.glycemia))
        }
    });
    return arrayglycemia;
}