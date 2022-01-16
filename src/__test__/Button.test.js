import {Button} from "../components/Button/Button";
import renderer from "react-test-renderer";

describe("Button component", () => {
  it("Render normal via snapshot", () => {
    const button = renderer.create(<Button type="submit" disabled={true} caption="Button" />)
    expect(button).toMatchSnapshot();
  })
})