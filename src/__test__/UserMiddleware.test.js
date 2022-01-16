import { doAuth } from "../modules/user/middlewares";
import { auth } from "../modules/user/actions";
import api from "../modules/api";

jest.mock("../modules/api", () => ({login: jest.fn()}));

describe("user middleware", () => {
  describe("AUTH", () => {
    it("auth through api", async () => {
      api.login.mockImplementation(() => ({data: {success: true}}));
      const dispatch = jest.fn();
      await doAuth({dispatch})()(
        auth({email: "testLogin", password: "testPassword"})
      )

      expect(api.login).toBeCalledWith({email: "testLogin", password: "testPassword"});
    })
  })
})