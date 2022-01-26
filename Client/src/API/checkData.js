import store from "../store";
import { updateAPI } from "../API/updateAPI";
store.getters.config;

export async function checkData() {
  if (store.getters.user.first_name == null) await updateAPI();
}
