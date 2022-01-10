import { doAuth } from "../modules/user/middlewares";
import { auth } from "../modules/user/actions";
import api from "../modules/api";

jest.mock("../modules/api", () => ({login: jest.fn()}));

describe("user middleware", () => {
  describe("#AUTH", () => {
    it("auth through api", async () => {
      const dispatch = jest.fn();

      await doAuth({dispatch})()(
        auth("testLogin", "testPassword")
      )

      expect(api.login).toBeCalledWith("testLogin", "testPassword");
    })
  })
})