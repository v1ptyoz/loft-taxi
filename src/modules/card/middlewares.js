import { sendCard, setCard, loadCard } from "./actions";
import api from "../api";

export const cardRequest = (store) => (next) => async (action) => {
  if (action.type === sendCard.toString()) {
    const {data} = await api.setCard(action.payload);
    if(data.success) {
      store.dispatch(setCard(action.payload));
    }
  } if (action.type === loadCard.toString()) {
      const response = await api.getCard(action.payload);
      console.log(response);
      if (response.status === 200) {
        store.dispatch(setCard(response.data));
      }
  } else {
    next(action);
  }
}