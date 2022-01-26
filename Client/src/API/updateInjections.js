import store from "../store";
store.getters.config;
import { getInjections } from "../API/get/getInjections";

//Met a jour les donnes dans l'application
export async function updateInjections() {

  store.commit("SET_HISTORY_INJECTIONS", await getInjections());
  store.commit(
    "SET_VALUE_HISTORY_INJECTIONS",
    await getLast(store.getters.history_injections)
  );
  store.commit(
    "SET_VALUE_TIMESTAMP_INJECTIONS",
    await getTimestamp(store.getters.history_injections)
  );
}

async function getLast(items) {
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

async function getTimestamp(items) {
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

async function getTimestampCompleteDate(items) {
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
