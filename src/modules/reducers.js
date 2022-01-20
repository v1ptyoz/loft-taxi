import card from './card';
import user from './user';
import addresses from './addresses';
import route from './route/reducers';
import { combineReducers } from "redux";

const appState = combineReducers({
  user,
  card,
  addresses,
  route
});

export default appState;