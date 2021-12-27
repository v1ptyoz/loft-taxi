import "./LoginForm.css";
import { Button } from "../Button/Button";
import { useState } from "react";
import propTypes from "prop-types";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";

export function LoginForm(props) {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [disabled, setDisabled] = useState(true);

  function checkInput() {
    if (email && password) {
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
            <h2>Войти</h2>
          </div>
          <div className="form__content">
            <TextField
              required
              id="standard-required"
              data-testid="email"
              label="Email"
              variant="standard"
              sx={{ width: "100%", mb: "35px"}}
              onInput={(event) => { setEmail(event.target.value); checkInput() }}
            />
            <TextField
              required
              id="standard-password-input"
              data-testid="password"
              type="password"
              autoComplete="current-password"
              label="Пароль"
              variant="standard"
              sx={{ width: "100%", mb: "30px"}}
              onInput={(event) => { setPassword(event.target.value); checkInput() }}
            />
            <div className="forgot">
              <span>Забыли пароль</span>
            </div>
            <Button type="submit" disabled={disabled} caption="Войти" />
            <div className="form__footer">
              Новый пользователь?
              <span onClick={props.linkHandler}>Регистрация</span>
            </div>
          </div>
        </div>
      </form>
    </Box>
  )
}

LoginForm.propTypes = {
  formHandler: propTypes.func.isRequired,
  linkHandler: propTypes.func.isRequired
}