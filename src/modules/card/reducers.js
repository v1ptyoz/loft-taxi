import {setCard} from "./actions";

const initState = {
    isExist: false,
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: ""
 };
 
const card = (state = initState, action) => {
  switch (action.type) {
    case setCard.toString():
      return {
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
        cardName: action.payload.cardName,
        cvc: action.payload.cvc,
        isExist: true
      }
    default: return state;
  }
 }

 export default card;