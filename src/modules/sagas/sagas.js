import { authSaga } from "./authSaga";
import { fork } from "redux-saga/effects"

export function* mainSaga() {
  yield fork(authSaga);
}