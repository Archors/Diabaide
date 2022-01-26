import store from "../store";
store.getters.config;
import { getUser } from "./get/getUser";
import { getGlycemias } from "../API/get/getGlycemias";
import { getMeals } from "../API/get/getMeals";
import { getInjections } from "../API/get/getInjections";
import { getHistoryMeals } from "../API/get/getHistoryMeals";

//Met a jour les donnes dans l'application
export async function updateAPI() {
  store.commit("SET_USER", await getUser());
  store.commit("SET_HISTORY_GLYCEMIAS", await getGlycemias());
  store.commit(
    "SET_VALUE_HISTORY_GLYCEMIAS",
    getLast(store.getters.history_glycemias)
  );
  store.commit(
    "SET_VALUE_TIMESTAMP_GLYCEMIAS",
    getTimestamp(store.getters.history_glycemias)
  );

  store.commit("SET_VALUE_MEALS", await getMeals());

  store.commit("SET_HISTORY_MEALS", await getHistoryMeals());
  store.commit("SET_VALUE_HISTORY_MEALS", getLast(store.getters.history_meals));
  store.commit(
    "SET_VALUE_TIMESTAMP_MEALS",
    getTimestampCompleteDate(store.getters.history_meals)
  );
  store.commit("SET_HISTORY_INJECTIONS", await getInjections());
  store.commit(
    "SET_VALUE_HISTORY_INJECTIONS",
    getLast(store.getters.history_injections)
  );
  store.commit(
    "SET_VALUE_TIMESTAMP_INJECTIONS",
    getTimestamp(store.getters.history_injections)
  );
}

function getLast(items) {
  var arrayglycemia = [];
  var i = 0;
  items.forEach((element) => {
    if (i < 7) {
      if (element.glycemia) {
        arrayglycemia.push(element.glycemia);
      }
      if (element.quantity) {
        arrayglycemia.push(element.quantity);
      }
      if (element.meal) {
        arrayglycemia.push(element.meal);
      }
    }
    i = i + 1;
  });
  return arrayglycemia.reverse();
}

function getTimestamp(items) {
  var arrayglycemia = [];
  var i = 0;
  items.forEach((element) => {
    if (i < 7) {
      arrayglycemia.push(element.timestamp.match(/\d\d:\d\d/)[0]);
      i = i + 1;
    }
  });

  return arrayglycemia.reverse();
}

function getTimestampCompleteDate(items) {
  var arrayglycemia = [];
  var i = 0;
  items.forEach((element) => {
    if (i < 7) {
      arrayglycemia.push(element.timestamp.match(/\d\d:\d\d/)[0]);
      i = i + 1;
    }
  });

  return arrayglycemia.reverse();
}
