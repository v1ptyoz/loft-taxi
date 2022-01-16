import "./LoginForm.css";
import { Button } from "../Button/Button";
import { useState } from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../modules/user";

function LoginForm(props) {
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

  const navigate = useNavigate()

  const submit = async (event) => {
    event.preventDefault();
    await props.auth({email, password});
    navigate("/");
  }

  return (
    <Box>
      <form className="form" onSubmit={submit}>
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
              name="email"
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
              name="password"
              onInput={(event) => { setPassword(event.target.value); checkInput() }}
            />
            <div className="forgot">
              <span>Забыли пароль</span>
            </div>
            <Button type="submit" disabled={disabled} caption="Войти" />
            <div className="form__footer">
              Новый пользователь?
              <Link to="/register">Регистрация</Link>
            </div>
          </div>
        </div>
      </form>
    </Box>
  )
}

export default connect(
  (state) => ({isLoggedIn: state.user.isLoggedIn}),
  { auth }
)(LoginForm);