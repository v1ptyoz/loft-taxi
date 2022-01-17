import {setRoute, clearRoute} from "./actions";

const initState = {
  isOrdered: false,
  points: []
 };
 
const route = (state = initState, action) => {
  switch (action.type) {
    case setRoute.toString():
      return {
        points: action.payload,
        isOrdered: true
      }
    case clearRoute.toString():
      return {
        points: [],
        isOrdered: false
      }
    default: return state;
  }
 }

 export default route;