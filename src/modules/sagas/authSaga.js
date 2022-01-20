import { doLogin } from "../api";
import { auth, logIn } from "../user/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* authorizationSaga({payload}) {
    const {data} = yield call(doLogin, payload);
    if (data.success) {
      yield put(logIn(data.token));
    }
}

export function* authSaga() {
  yield takeEvery(auth, authorizationSaga)
}