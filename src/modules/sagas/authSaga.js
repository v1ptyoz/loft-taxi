import { doLogin } from "../api";
import { auth, logIn, setError, setLoading } from "../user/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* authorizationSaga({payload}) {
    yield put(setLoading());
    try {
      const {data} = yield call(doLogin, payload);
      if (data.success) {
        yield put(logIn(data.token));
      } else {
        yield put(setError(data.error))
      }
    } catch {
      yield put(setError("Во время авторизации произошла ошибка"))
    }
}

export function* authSaga() {
  yield takeEvery(auth, authorizationSaga)
}