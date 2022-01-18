import { authSaga } from "./authSaga";
import { cardSaga } from "./cardSaga";
import { addressesSaga } from "./addressesSaga";
import { routeSaga } from "./routeSaga";
import { registrationSaga } from "./registrationSaga";
import { fork } from "redux-saga/effects"

export function* mainSaga() {
  yield fork(authSaga);
  yield fork(cardSaga);
  yield fork(addressesSaga);
  yield fork(routeSaga);
  yield fork(registrationSaga);
}