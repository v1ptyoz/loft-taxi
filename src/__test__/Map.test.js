import mapboxgl from "mapbox-gl"
import { Map } from "../components/Map/Map"
import { render } from "@testing-library/react";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({remove: () => {}}))
}))
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost/path"
  })
}));
jest.mock("../components/MapModal/MapModal", () => 'div')

describe("Map", () => {
  it("render correctly", () => {
    const map = render(<Map />);

    expect(mapboxgl.Map).toHaveBeenCalledWith({
      container: map.getByTestId("map"),
      style: 'mapbox://styles/mapbox/light-v10',
      center: [30.3228,59.9327],
      zoom: 12
    })
  })
})