import { recordSaga } from "./helpers";
import { registerSaga } from  "../modules/sagas/registrationSaga";
import { register } from "../modules/user/actions";
import { doRegister } from "../modules/api"


jest.mock("../modules/api");

describe("Registration saga test", () => {
  it("register via api", async () => {
    doRegister.mockImplementation(() => ({data: {success: true, token: "testToken"}}));
    const dispatched = await recordSaga(
      registerSaga,
      register({login: "testLogin", password: "testPassword"})
    )
    expect(dispatched).toEqual([
      {
        type: "loft-taxi/user/setLoading"
      },
      {
        type: "loft-taxi/user/logIn",
        payload: "testToken"
      }
    ])
  })
})