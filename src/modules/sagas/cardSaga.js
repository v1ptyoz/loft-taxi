import { doGetCard, doSetCard } from "../api";
import { setCard, loadCard, sendCard, setLoading, setError } from "../card/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* getCardSaga({payload}) {
  yield put(setLoading());
  try {
    const response = yield call(doGetCard, payload);
    if (response.data.hasOwnProperty("cardNumber")) {
      yield put(setCard(response.data));
    } else {
      yield put(setError("Во время запроса данных произошла ошибка"))
    }
  } catch {
    yield put(setError("Ошибка получения данных карты с сервера"))
  }
  
}

export function* setCardSaga({payload}) {
  yield put(setLoading());
  try {
    const {data} = yield call(doSetCard, payload);
    if (data.success) {
      yield put(setCard(payload));
    } else {
      yield put(setError(data.error))
    }
  } catch {
    yield put(setError("Во время сохранения данных произошла ошибка"))
  }
  
}

export function* cardSaga() {
  yield takeEvery(loadCard, getCardSaga);
  yield takeEvery(sendCard, setCardSaga);
}