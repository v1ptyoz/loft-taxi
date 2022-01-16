import mapboxgl from "mapbox-gl"
import { Map } from "../components/Map/Map"
import { render } from "@testing-library/react"

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({remove: () => {}}))
}))

describe("Map", () => {
  it("render correctly", () => {
    const map = render(<Map />);

    expect(mapboxgl.Map).toHaveBeenCalledWith({
      container: map.getByTestId("map"),
      style: 'mapbox://styles/mapbox/light-v10',
      center: [37.617587104605946,55.7513142251542],
      zoom: 15
    })
  })
})