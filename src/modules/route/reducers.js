import {setRoute} from "./actions";

const initState = {
  points: []
 };
 
const route = (state = initState, action) => {
  switch (action.type) {
    case setRoute.toString():
      return {
        points: action.payload,
      }
    default: return state;
  }
 }

 export default route;