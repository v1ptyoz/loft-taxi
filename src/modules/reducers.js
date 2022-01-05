import card from './card';
import user from './user'
import { combineReducers } from "redux";

const appState = combineReducers({
  user,
  card
});

export default appState;