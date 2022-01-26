import {setCard, setError, setLoading} from "./actions";

const initState = {
    isExist: false,
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
    loading: false,
    error: null
 };
 
const card = (state = initState, action) => {
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
    case setCard.toString():
      return {
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
        cardName: action.payload.cardName,
        cvc: action.payload.cvc,
        isExist: true,
        loading: false
      }
    default: return state;
  }
 }

 export default card;