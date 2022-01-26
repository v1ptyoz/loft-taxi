import {setRoute, clearRoute, setError, setLoading} from "./actions";

const initState = {
  isOrdered: false,
  points: [],
  loading: false,
  error: null,
 };
 
const route = (state = initState, action) => {
  switch (action.type) {
    case setLoading.toString():
      return {
        ...state,
        loading: true,
      }
    case setError.toString():
      return {
        loading: false,
        error: action.payload
      }
    case setRoute.toString():
      return {
        points: action.payload,
        isOrdered: true,
        loading: false,
      }
    case clearRoute.toString():
      return {
        points: [],
        isOrdered: false,
        loading: false,
      }
    default: return state;
  }
 }

 export default route;