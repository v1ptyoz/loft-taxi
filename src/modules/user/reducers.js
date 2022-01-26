import {logIn, logOut, setError, setLoading} from "./actions";

const initState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token"),
  loading: false,
  error: null
 };
 
const user = (state = initState, action) => {
  switch (action.type) {
    case setLoading.toString():
      return {
        loading: true,
      }
    case setError.toString():
      return {
        loading: false,
        error: action.payload
      }
    case logIn.toString():
      localStorage.setItem("token", action.payload)
      return {
        isLoggedIn: true,
        token: action.payload,
        loading: false
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