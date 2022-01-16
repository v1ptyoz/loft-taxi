import "./RoutesForm.css";
import Box from "@mui/material/Box"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { connect } from "react-redux";
import { getAddresses } from "../../modules/addresses";
import { getRoute } from "../../modules/route";

function RoutesForm(props) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    if (props.list.length === 0) {
      props.getAddresses();
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
      props.getRoute([from, to, props.map.current]);
    }
  }

  return (
      <div className="routes">
          <form onSubmit={submit}>
            <Box>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 400 }}>
                <InputLabel id="from-label">Откуда</InputLabel>
                <Select
                  labelId="from-label"
                  id="from-select-standard"
                  value={from}
                  onChange={handleFrom}
                  label="Откуда"
                >
                  <MenuItem value="">
                    <em>Откуда</em>
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
              <FormControl variant="standard" sx={{ m: 1, minWidth: 400, mb: 5 }}>
                <InputLabel id="to-label">Куда</InputLabel>
                <Select
                  labelId="to-label"
                  id="to-select-standard"
                  value={to}
                  onChange={handleTo}
                  label="Куда"
                >
                  <MenuItem value="">
                    <em>Куда</em>
                  </MenuItem>
                  {props.list.map(element => {
                    if (element !== from) {
                      return <MenuItem key={element} value={element}>{element}</MenuItem>
                    } else return null;
                  })}
                </Select>
              </FormControl>
            </Box>
            <Button caption="Заказать" type="submit" />
          </form>
      </div>
  )
}

export default connect(
  (state) => ({list: state.addresses.list}),
  { getAddresses, getRoute }
)(RoutesForm);