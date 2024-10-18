import axios from "axios";

export function logout() {
  delete axios.defaults.headers.common["Authorization"];
  localStorage.removeItem("jwt");
  window.location.href = "/";
}