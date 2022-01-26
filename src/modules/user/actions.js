import { createAction } from "redux-actions";

export const setLoading = createAction("loft-taxi/user/setLoading");
export const setError = createAction("loft-taxi/user/setError");
export const logIn = createAction("loft-taxi/user/logIn")
export const logOut = createAction("loft-taxi/user/logOut");
export const auth = createAction("loft-taxi/user/auth");
export const register = createAction("loft-taxi/user/register");

