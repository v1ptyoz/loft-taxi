import { doGetRoute } from "../api";
import { getRoute, setRoute, setLoading, setError } from "../route/actions";
import { takeEvery, call, put } from "redux-saga/effects";

export function* routesSaga({payload}) {
  yield put(setLoading());
  try {
    const [address1, address2] = payload;
    const response = yield call(doGetRoute, [address1, address2]);
    if (response.status === 200) {
      yield put(setRoute(response.data));
    } else {
      yield put(setError("Ошибка получения маршрута с сервера"))
    }
  } catch {
    yield put(setError("Ошибка отправки запроса на сервер"))
  }
}

export function* routeSaga() {
  yield takeEvery(getRoute, routesSaga)
}




