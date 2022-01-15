import card from './card';
import user from './user';
import addresses from './addresses';
import { combineReducers } from "redux";

const appState = combineReducers({
  user,
  card,
  addresses
});

export default appState;