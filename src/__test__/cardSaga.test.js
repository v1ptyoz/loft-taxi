import { recordSaga } from "./helpers";
import { getCardSaga, setCardSaga } from  "../modules/sagas/cardSaga";
import { loadCard, sendCard } from "../modules/card/actions";
import { doGetCard, doSetCard } from "../modules/api"

jest.mock("../modules/api");

describe("cardSaga test", () => {
  it("get card via api", async () => {
    doGetCard.mockImplementation(() => ({data: {cardNumber: "cardNumber", cardName: "cardHolder", expiryDate: "11/22", cvc: "555"}}));
    const dispatched = await recordSaga(
      getCardSaga,
      loadCard(),
    )
    expect(dispatched).toEqual([
      {
        type: "loft-taxi/card/setLoading"
      },
      {
        type: "loft-taxi/card/setCard",
        payload: {cardNumber: "cardNumber", cardName: "cardHolder", expiryDate: "11/22", cvc: "555"}
      }
    ])
  })
  it("set card via api", async () => {
    doSetCard.mockImplementation(() => ({data: {success: true}}));
    const dispatched = await recordSaga(
      setCardSaga,
      sendCard({cardNumber: "cardNumber", cardName: "cardHolder", expiryDate: "11/22", cvc: "555"}),
    )
    expect(dispatched).toEqual([
      {
        type: "loft-taxi/card/setLoading"
      },
      {
        type: "loft-taxi/card/setCard",
        payload: {cardNumber: "cardNumber", cardName: "cardHolder", expiryDate: "11/22", cvc: "555"}
      }
    ])
  })
})

