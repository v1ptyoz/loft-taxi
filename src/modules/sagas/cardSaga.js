import { doGetCard, doSetCard } from "../api";
import { setCard, loadCard, sendCard } from "../card/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* getCardSaga() {
  yield takeEvery(loadCard, function*({payload}) {
    const response = yield call(doGetCard, payload);
    if (response.status === 200) {
      yield put(setCard(response.data));
    }
  })
}

export function* setCardSaga() {
  yield takeEvery(sendCard, function*({payload}) {
    const {data} = yield call(doSetCard, payload);
    if (data.success) {
      yield put(setCard(payload));
    }
  })
}