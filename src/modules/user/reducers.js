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
    // case loadUserData.toString():
    //   if (localStorage.getItem("token")) {
    //     return {
    //       isLoggedIn: true,
    //       token: localStorage.getItem("token")
    //     }
    //   } else {
    //       return {
    //         isLoggedIn: false,
    //         token: ""
    //       }
    //   }
    default: return state;
  }
 }

 export default user;