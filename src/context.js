import { createContext } from "react";

const dataContext = createContext({
  isLoggedIn: false,
  login() {
    this.isLoggedIn = true;
  },
  logout() {
    this.isLoggedIn = false;
  },
})

export default dataContext;