import { createAction } from "redux-actions";

export const setLoading = createAction("loft-taxi/route/setLoading");
export const setError = createAction("loft-taxi/route/setError");
export const getRoute = createAction("loft-taxi/route/getRoute");
export const setRoute = createAction("loft-taxi/route/setRoute");
export const clearRoute = createAction("loft-taxi/route/clearRoute");