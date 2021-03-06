import Vue from "vue";

export default function authHeader() {
  const token = Vue.$cookies.get("token");
  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}
