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
    store.commit("SET_VALUE_HISTORY_GLYCEMIAS",await getLastDay());
    store.commit("SET_VALUE_TIMESTAMP_GLYCEMIAS",await getTimestamp());
    store.commit("SET_VALUE_MEALS", await getMeals());
    // store.commit("SET_HISTORY_MEALS", await getMeals());
    // store.commit("SET_HISTORY_INJECTIONS", await getInjections());
}


 async function getLastDay () {
    var arrayglycemia = [];
    var i = 0
    store.getters.history_glycemias.forEach(element => {
        if(i < 10)
        {
            arrayglycemia.push(element.glycemia);
            i = i +1;
        }
    });   
    return arrayglycemia.reverse();
}

async function getTimestamp () {
    var arrayglycemia = [];
    var i = 0
    store.getters.history_glycemias.forEach(element => {
        if(i < 10)
        {
            arrayglycemia.push((element.timestamp).match(/\d\d:\d\d/)[0]);
            i = i +1;
        }
            
        
    });
    
    return arrayglycemia.reverse();
}