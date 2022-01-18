import { doGetRoute } from "../api";
import { getRoute, setRoute } from "../route/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* routesSaga({payload}) {
  const [address1, address2] = payload;
  const response = yield call(doGetRoute, [address1, address2]);
  if (response.status === 200) {
    yield put(setRoute(response.data));
  }
}

export function* routeSaga() {
  yield takeEvery(getRoute, routeSaga)
}




