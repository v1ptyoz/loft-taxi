import { recordSaga } from "./helpers";
import { authorizationSaga } from  "../modules/sagas/authSaga";
import { auth } from "../modules/user/actions";
import { doLogin } from "../modules/api"

jest.mock("../modules/api");

describe("authSaga test", () => {
  it("auth via api", async () => {
    doLogin.mockImplementation(() => ({data: {success: true, token: "testToken"}}));
    const dispatched = await recordSaga(
      authorizationSaga,
      auth({login: "testLogin", password: "testPassword"})
    )
    expect(dispatched).toEqual([
      {
        type: "loft-taxi/user/logIn",
        payload: "testToken"
      }
    ])
  })
})