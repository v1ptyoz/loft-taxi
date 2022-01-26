import { doRegister } from "../api";
import { register, logIn, setLoading, setError } from "../user/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* registerSaga({payload}) {
  yield put(setLoading());
  try {
    const {data} = yield call(doRegister, payload);
    if (data.success) {
      yield put(logIn(data.token));
    } else {
      yield put(setError(data.error))
    }
  } catch {
    yield put(setError("Ошибка отправки запроса на регистрацию"))
  }
}

export function* registrationSaga() {
  yield takeEvery(register, registerSaga)
}