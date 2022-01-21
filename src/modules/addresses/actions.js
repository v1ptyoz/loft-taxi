import { createAction } from "redux-actions";

export const setLoading = createAction("loft-taxi/addresses/setLoading");
export const setError = createAction("loft-taxi/addresses/setError");
export const getAddresses = createAction("loft-taxi/addresses/getAddresses");
export const setAddresses = createAction("loft-taxi/addresses/setAddresses");