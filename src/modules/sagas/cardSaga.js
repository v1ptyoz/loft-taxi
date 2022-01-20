import { doGetCard, doSetCard } from "../api";
import { setCard, loadCard, sendCard } from "../card/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* getCardSaga({payload}) {
  const response = yield call(doGetCard, payload);
  if (response.data.hasOwnProperty("cardNumber")) {
    yield put(setCard(response.data));
  }
}

export function* setCardSaga({payload}) {
  const {data} = yield call(doSetCard, payload);
  if (data.success) {
    yield put(setCard(payload));
  }
}

export function* cardSaga() {
  yield takeEvery(loadCard, getCardSaga);
  yield takeEvery(sendCard, setCardSaga);
}