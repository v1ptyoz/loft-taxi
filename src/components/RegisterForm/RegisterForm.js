import { Button } from "../Button/Button";
import { useState } from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { useContext } from "react";
import dataContext from "../../context";
import { useNavigate, useLocation, Link } from "react-router-dom";

export function RegisterForm() {
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

  const context = useContext(dataContext);

  const navigate = useNavigate()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: "/" } }

  const submit = (event) => {
    event.preventDefault();
    context.login();
    navigate(from);
  }

  return (
    <Box>
      <form className="form" onSubmit={submit}>
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
              <Link to="/login">Войти</Link>
            </div>
          </div>
        </div>
      </form>
    </Box>
  )
}