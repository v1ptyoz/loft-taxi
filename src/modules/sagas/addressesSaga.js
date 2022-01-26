import { doGetAddressList } from "../api";
import { getAddresses, setAddresses, setError, setLoading } from "../addresses/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* getAddressesSaga() {
  yield put(setLoading());
  
  try {
    const response = yield call(doGetAddressList);
    if (response.status === 200) {
      yield put(setAddresses(response.data));
    } else {
      yield put(setError("Ошибка получения списка адресов с сервера"));
    }
  } catch {
    yield put(setError("Ошибка отправки запроса на сервер"));
  }
}

export function* addressesSaga() {
  yield takeEvery(getAddresses, getAddressesSaga)
}