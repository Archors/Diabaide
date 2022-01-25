import store from "../store";
import { updateAPI } from "../API/updateAPI";
store.getters.config;

export function checkData() {
  if (store.getters.user.first_name == null) updateAPI();
}
