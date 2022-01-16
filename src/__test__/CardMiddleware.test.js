import { cardRequest } from "../modules/card/middlewares";
import { sendCard, loadCard } from "../modules/card/actions";
import api from "../modules/api";

jest.mock("../modules/api", () => ({getCard: jest.fn(), setCard: jest.fn()}));

describe("card middleware", () => {
    it("get card through api", async () => {
      api.getCard.mockImplementation(() => ({status: 200}));
      const dispatch = jest.fn();
      await cardRequest({dispatch})()(
        loadCard({
          cardNumber: 12345,
          cardName: "test card name",
          cvc: 555,
          expiryDate: 2812,
        })
      )
      expect(api.getCard).toBeCalledWith(
        {
          cardNumber: 12345,
          cardName: "test card name",
          cvc: 555,
          expiryDate: 2812,
        }
      );
    })

    it("set card through api", async () => {
      api.setCard.mockImplementation(() => ({data: {success: true}}));
      const dispatch = jest.fn();
      await cardRequest({dispatch})(sendCard)(
        sendCard({
          cardNumber: 12345,
          cardName: "test card name",
          cvc: 555,
          expiryDate: 2812,
        })
      )
      expect(api.setCard).toBeCalledTimes(1);
    })
})