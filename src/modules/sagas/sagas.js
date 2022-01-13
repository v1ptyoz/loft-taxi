import { authSaga } from "./authSaga";
import { getCardSaga, setCardSaga } from "./cardSaga";
import { fork } from "redux-saga/effects"

export function* mainSaga() {
  yield fork(authSaga);
  yield fork(getCardSaga);
  yield fork(setCardSaga);
}