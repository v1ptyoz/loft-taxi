import { createAction } from "redux-actions";

export const getRoute = createAction("loft-taxi/route/getRoute");
export const setRoute = createAction("loft-taxi/route/setRoute");
export const clearRoute = createAction("loft-taxi/route/clearRoute");