import { auth, logIn } from "./actions";
import api from "../api";

export const doAuth = (store) => (next) => async (action) => {
  if (action.type === auth.toString()) {
    const {data} = await api.login(action.payload);
    if(data.success) {
      store.dispatch(logIn(data.token));
    }
  } else {
    next(action);
  }
}