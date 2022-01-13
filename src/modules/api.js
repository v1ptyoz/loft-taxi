import axios from "axios";

const URL = "https://loft-taxi.glitch.me";

const fetch = axios.create({
  baseURL: URL,
})

export function doLogin(data) {
  return fetch.post("/auth", data)
}

const server = {
  register: (data) => fetch.post("/register", data),
  setCard: (data) => fetch.post("/card", data),
  getCard: (token) => fetch.get(`/card?token=${token}`),
  getRoute: () => fetch.get("/route"),
  getAddressList: () => fetch.get("/addressList")
}

export default server;