import card from "../modules/card/reducers";
import {setCard} from "../modules/card/actions";

describe("Card reducer tests", () => {
  it("When set card", () => {
    const initialState = {
      cardNumber: "",
      expiryDate: "",
      cardName: "",
      cvc: "",
    }
    const changedState = {
      cardNumber: 12345,
      expiryDate: "11.22",
      cardName: "test name",
      cvc: 123,
    }
    expect(card(initialState, setCard({
      cardNumber: 12345,
      expiryDate: "11.22",
      cardName: "test name",
      cvc: 123,
    }))).toEqual(changedState);
  })
})