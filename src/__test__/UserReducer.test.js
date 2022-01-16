import user from "../modules/user/reducers";
import {logIn, logOut} from "../modules/user/actions";

describe("User reducer tests", () => {
  it("When logIn", () => {
    const initialState = {
      isLoggedIn: false,
      token: null
    }
    const changedState = {
      isLoggedIn: true,
      token: "test token"
    }
    expect(user(initialState, logIn("test token"))).toEqual(changedState);
  })
  it("When logOut", () => {
    const initialState = {
      isLoggedIn: true,
      token: "test token"
    }
    const changedState = {
      isLoggedIn: false,
    }
    expect(user(initialState, logOut())).toEqual(changedState);
  })
})