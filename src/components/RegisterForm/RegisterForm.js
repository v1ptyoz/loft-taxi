import "./RegisterForm.css";
import { Button } from "../Button/Button";
import { useState } from "react";
import propTypes from "prop-types";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";

export function RegisterForm(props) {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [name, setName] = useState();
  let [disabled, setDisabled] = useState(true);

  function checkInput() {
    if (email && password && name) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  return (
    <Box>
      <form className="form" onSubmit={props.formHandler}>
        <div className="form__wrapper">
          <div className="form__header">
            <h2>Регистрация</h2>
          </div>
          <div className="form__content">
            <TextField
              required
              id="standard-required"
              label="Email"
              variant="standard"
              sx={{ width: "100%", mb: "35px"}}
              onInput={(event) => {setEmail(event.target.value); checkInput()}}
            />
            <TextField
              required
              id="standard-required"
              data-testid="name"
              label="Как вас зовут?"
              variant="standard"
              sx={{ width: "100%", mb: "35px"}}
              onInput={(event) => { setName(event.target.value); checkInput() }}
            />
            <TextField
              required
              id="standard-password-input"
              data-testid="password"
              type="password"
              autoComplete="current-password"
              label="Придумайте пароль"
              variant="standard"
              sx={{ width: "100%", mb: "50px"}}
              onInput={(event) => { setPassword(event.target.value); checkInput() }}
            />
            <Button caption="Войти" type="submit" disabled={disabled}/>
            <div className="form__footer">
              Уже зарегистрированы?
              <span onClick={props.linkHandler}>Войти</span>
            </div>
          </div>
        </div>
      </form>
    </Box>
  )
}

RegisterForm.propTypes = {
  formHandler: propTypes.func.isRequired,
  linkHandler: propTypes.func.isRequired
}