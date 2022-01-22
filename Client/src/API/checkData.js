import store from "../store";
import { updateAPI } from "./updateAPI";
store.getters.config;

export function checkData() {
  if (store.getters.user.first_name == null) updateAPI();
}
