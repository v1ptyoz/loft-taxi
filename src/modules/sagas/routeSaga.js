import { doGetRoute } from "../api";
import { getRoute } from "../route/actions";
import { takeEvery, call } from "redux-saga/effects";

export function* routeSaga() {
  yield takeEvery(getRoute, function*({payload}) {
    const [address1, address2, map] = payload;
    const response = yield call(doGetRoute, [address1, address2]);
    if (response.status === 200) {
      drawRoute(map, response.data)
    }
  })
}

function drawRoute(map, coordinates) {
  if (map.getLayer("route")) {
    map.removeLayer("route");
  }
  if (map.getSource("route")) {
    map.removeSource("route");
  }
  map.flyTo({
    center: coordinates[0],
    zoom: 15
  });
 
  map.addLayer({
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": "#ffc617",
      "line-width": 8
    }
  });
};
