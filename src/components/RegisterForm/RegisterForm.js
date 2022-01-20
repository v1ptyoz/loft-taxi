import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../modules/user";

function RegisterForm(props) {
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

  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    await props.register({
      email,
      password,
      name: name.split(" ")[0],
      surname: name.split(" ")[1],
    });
  }

  useEffect(() => {
    if (props.isLoggedIn) {
      navigate("/");
    }
  }, [props])

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

export default connect(
  (state) => ({isLoggedIn: state.user.isLoggedIn}),
  { register }
)(RegisterForm);