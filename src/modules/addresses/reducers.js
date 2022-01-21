import {setAddresses, setError, setLoading} from "./actions";

const initState = {
    list: [],
    loading: false,
    error: null,
 };
 
const addresses = (state = initState, action) => {
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
    case setAddresses.toString():
      return {
        list: action.payload.addresses,
        loading: false,
      }
    default: return state;
  }
 }

 export default addresses;