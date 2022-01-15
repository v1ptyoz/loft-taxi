import { doGetAddressList } from "../api";
import { getAddresses, setAddresses } from "../addresses/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* addressesSaga() {
  yield takeEvery(getAddresses, function*({payload}) {
    const response = yield call(doGetAddressList, payload);
    if (response.status === 200) {
      yield put(setAddresses(response.data));
    }
  })
}
