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
  return fetch.get(`/card?token=${token}`, token);
}

export function doGetAddressList() {
  return fetch.get("/addressList")
}

export function doGetRoute(data) {
  const [address1, address2, ] = data;
  return fetch.get(`/route?address1=${address1}&address2=${address2}`)
}