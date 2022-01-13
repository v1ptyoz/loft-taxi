import axios from "axios";

const URL = "https://loft-taxi.glitch.me";

const fetch = axios.create({
  baseURL: URL,
})

export function doLogin(data) {
  return fetch.post("/auth", data)
}

export function doSetCard(data) {
  return fetch.post("/card", data)
}

export function doGetCard(token) {
  return fetch.get(`/card?token=${token}`, token)
}

const server = {
  register: (data) => fetch.post("/register", data),
  getRoute: () => fetch.get("/route"),
  getAddressList: () => fetch.get("/addressList")
}

export default server;