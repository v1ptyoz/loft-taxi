import "./LoginForm.css";
import { Button } from "../Button/Button";
import { useState } from "react";

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
    <form className="form">
      <div className="form__wrapper">
        <div className="form__header">
          <h2>Войти</h2>
        </div>
        <div className="form__content">
          <label className="form__input-text">
            <span>Email</span>
            <input type="text" placeholder="Email" onInput={(event) => {setEmail(event.target.value); checkInput()}}/>
          </label>
          <label className="form__input-text">
            <span>Пароль</span>
            <input type="password" placeholder="Пароль" onInput={(event) => {setPassword(event.target.value); checkInput()}}/>
          </label>
          <div className="forgot">
            <span>Забыли пароль</span>
          </div>
          <Button caption="Войти" disabled={disabled} handler={props.formHandler} />
          <div className="form__footer">
            Новый пользователь?
            <span onClick={props.linkHandler}>Регистрация</span>
          </div>
        </div>
      </div>
    </form>
  )
}