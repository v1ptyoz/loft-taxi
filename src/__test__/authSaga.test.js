import { recordSaga } from "./helpers";
import { authSaga } from  "../modules/sagas/authSaga";
import { auth } from "../modules/user/actions";
import { doLogin } from "../modules/api"

jest.mock("../modules/api", () => ({doLogin: jest.fn()}));

describe("authSaga test", () => {
  it("auth via api", async () => {
    doLogin.mockImplementation(() => ({data: {success: true}}));
    const dispatched = await recordSaga(
      authSaga,
      auth({login: "testLogin", password: "testPassword"})
    )
    expect(dispatched).toEqual([
      {
        type: "loft-taxi/user/logIn"
      }
    ])
  })
})