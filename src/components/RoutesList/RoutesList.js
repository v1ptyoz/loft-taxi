import Box from "@mui/material/Box"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { connect } from "react-redux";
import { getAddresses } from "../../modules/addresses";
import { clearRoute, getRoute } from "../../modules/route";
import './RoutesList.css';

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

function clearMap(map) {
  if (map.getLayer("route")) {
    map.removeLayer("route");
  }
  if (map.getSource("route")) {
    map.removeSource("route");
  }
}

function RoutesList(props) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  function newOrderHandler() {
    clearMap(props.map.current);
    props.clearRoute();
    props.map.current.flyTo({
      center: [30.3228,59.9327],
      zoom: 12
    });
  }

  useEffect(() => {
    if (props.list.length === 0) {
      props.getAddresses();
    }
    if (props.points.length > 0) {
      drawRoute(props.map.current, props.points);
      setFrom("");
      setTo("");
    }
  }, [props])

  const handleFrom = (event) => {
    setFrom(event.target.value);
  };

  const handleTo = (event) => {
    setTo(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (from && to) {
      props.getRoute([from, to]);
    }
  }

  return !props.isOrdered ? (
    <div className="modal routes">
          <h2 className="modal__header">?????????? ??????????</h2>
          <form onSubmit={submit}>
            <Box>
              <FormControl variant="standard" sx={{ m: 1 }} className="form__select">
                <InputLabel id="from-label">????????????</InputLabel>
                <Select
                  labelId="from-label"
                  id="from-select-standard"
                  value={from}
                  onChange={handleFrom}
                  label="????????????"
                >
                  <MenuItem value="">
                    <em>????????????</em>
                  </MenuItem>

                  {props.list.map(element => {
                    if (element !== to) {
                      return <MenuItem key={element} value={element}>{element}</MenuItem>
                    } else return null;
                  })}
                  
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl variant="standard" sx={{ m: 1, mb: 5 }} className="form__select">
                <InputLabel id="to-label">????????</InputLabel>
                <Select
                  labelId="to-label"
                  id="to-select-standard"
                  value={to}
                  onChange={handleTo}
                  label="????????"
                >
                  <MenuItem value="">
                    <em>????????</em>
                  </MenuItem>
                  {props.list.map(element => {
                    if (element !== from) {
                      return <MenuItem key={element} value={element}>{element}</MenuItem>
                    } else return null;
                  })}
                </Select>
              </FormControl>
            </Box>
            <div className="form__btn">
              <Button caption="????????????????" type="submit" />
            </div>
          </form>
      </div>
  ) : (
    <div className="modal">
      <h2 className="modal__header">?????????? ????????????????</h2>
      <p>???????? ?????????? ?????? ???????? ?? ??????. ???????????????? ???????????????????????????? ?????????? 10 ??????????.</p>
      <Button caption="?????????????? ?????????? ??????????" type="submit" onClick={newOrderHandler} />
    </div>
  )
}

export default connect(
  (state) => ({list: state.addresses.list, card: state.card, points: state.route.points, isOrdered: state.route.isOrdered}),
  { getAddresses, getRoute, clearRoute }
)(RoutesList);