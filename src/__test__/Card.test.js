import {Card} from "../components/Card/Card";
import renderer from "react-test-renderer";

describe("Button component", () => {
  it("Render normal via snapshot", () => {
    const card = renderer.create(<Card expiryDate="28/11" cardNumber="1234 5678" cvc="555" />)
    expect(card).toMatchSnapshot();
  })
})