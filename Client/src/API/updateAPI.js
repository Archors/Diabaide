import store from '../store'
store.getters.config
import { getUser } from "./get/getUser";
import { getGlycemias } from "../API/get/getGlycemias";
import { getMeals } from "../API/get/getMeals";
import { getInjections } from "../API/get/getInjections";
import { getOpenFood } from "./get/getOpenFoods";

//Met a jour les donnes dans l'application
export async function updateAPI() {
    store.commit("SET_USER", await getUser());
    store.commit("SET_HISTORY_GLYCEMIAS", await getGlycemias());
    store.commit("SET_VALUE_HISTORY_GLYCEMIAS",await getLast(store.getters.history_glycemias));
    store.commit("SET_VALUE_TIMESTAMP_GLYCEMIAS",await getTimestamp(store.getters.history_glycemias));
    store.commit("SET_VALUE_MEALS", await getMeals());
    // store.commit("SET_VALUE_HISTORY_GLYCEMIAS",await getLast());
    // store.commit("SET_VALUE_TIMESTAMP_GLYCEMIAS",await getTimestamp());
    store.commit("SET_HISTORY_INJECTIONS", await getInjections());
    store.commit("SET_VALUE_HISTORY_INJECTIONS",await getLast(store.getters.history_injections));
    store.commit("SET_VALUE_TIMESTAMP_INJECTIONS",await getTimestamp(store.getters.history_injections));
}


 async function getLast (items) {
    var arrayglycemia = [];
    var i = 0
    items.forEach(element => {
        if(i < 7)
        {
            if(element.glycemia){
                arrayglycemia.push(element.glycemia);
            }
            if(element.quantity){
                arrayglycemia.push(element.quantity);
            }
            i = i +1;
        }
    });   
    return arrayglycemia.reverse();
}

async function getTimestamp (items) {
    var arrayglycemia = [];
    var i = 0
    items.forEach(element => {
        if(i < 7)
        { 
            arrayglycemia.push((element.timestamp).match(/\d\d:\d\d/)[0]);
            i = i +1;
        }  
    });
    
    return arrayglycemia.reverse();
}