import { authSaga } from "./authSaga";
import { getCardSaga, setCardSaga } from "./cardSaga";
import { addressesSaga } from "./addressesSaga";
import { routeSaga } from "./routeSaga";
import { registrationSaga } from "./registrationSaga";
import { fork } from "redux-saga/effects"

export function* mainSaga() {
  yield fork(authSaga);
  yield fork(getCardSaga);
  yield fork(setCardSaga);
  yield fork(addressesSaga);
  yield fork(routeSaga);
  yield fork(registrationSaga);
}