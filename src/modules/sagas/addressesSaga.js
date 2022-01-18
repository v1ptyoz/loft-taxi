import { doGetAddressList } from "../api";
import { getAddresses, setAddresses } from "../addresses/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* getAddressesSaga() {
    const response = yield call(doGetAddressList);
    if (response.status === 200) {
      yield put(setAddresses(response.data));
    }
}

export function* addressesSaga() {
  yield takeEvery(getAddresses, getAddressesSaga)
}