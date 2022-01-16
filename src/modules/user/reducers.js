import {logIn, logOut} from "./actions";

const initState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token"),
 };
 
const user = (state = initState, action) => {
  switch (action.type) {
    case logIn.toString():
      localStorage.setItem("token", action.payload)
      return {
        isLoggedIn: true,
        token: action.payload
      }
    case logOut.toString():
      localStorage.removeItem("token")
      return {
        isLoggedIn: false,
      }
    default: return state;
  }
 }

 export default user;