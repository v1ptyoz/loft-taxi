import {setAddresses} from "./actions";

const initState = {
    list: []
 };
 
const addresses = (state = initState, action) => {
  switch (action.type) {
    case setAddresses.toString():
      return {
        list: action.payload.addresses
      }
    default: return state;
  }
 }

 export default addresses;