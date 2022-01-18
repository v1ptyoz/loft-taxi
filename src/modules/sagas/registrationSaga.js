import { doRegister } from "../api";
import { register, logIn } from "../user/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* registerSaga({payload}) {
  const {data} = yield call(doRegister, payload);
  if (data.success) {
    yield put(logIn(data.token));
  }
}

export function* registrationSaga() {
  yield takeEvery(register, registerSaga)
}