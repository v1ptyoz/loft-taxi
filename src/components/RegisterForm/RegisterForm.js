import "./RegisterForm.css";
import { Button } from "../Button/Button";
import { useState } from "react";
import propTypes from "prop-types";

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
    <form className="form" onSubmit={props.formHandler}>
      <div className="form__wrapper">
        <div className="form__header">
          <h2>Регистрация</h2>
        </div>
        <div className="form__content">
          <label className="form__input-text">
            <span>Email</span>
            <input data-testid="email" type="text" placeholder="Email" onInput={(event) => {setEmail(event.target.value); checkInput()}}/>
          </label>
          <label className="form__input-text">
            <span>Как вас зовут</span>
            <input data-testid="name" type="text" placeholder="Введите имя" onInput={(event) => {setName(event.target.value); checkInput()}}/>
          </label>
          <label className="form__input-text">
            <span>Придумайте пароль</span>
            <input data-testid="password" type="password" placeholder="Пароль" onInput={(event) => {setPassword(event.target.value); checkInput()}}/>
          </label>
          <Button caption="Войти" type="submit" disabled={disabled}/>
          <div className="form__footer">
            Уже зарегистрированы?
            <span onClick={props.linkHandler}>Войти</span>
          </div>
        </div>
      </div>
    </form>
  )
}

RegisterForm.propTypes = {
  formHandler: propTypes.func.isRequired,
  linkHandler: propTypes.func.isRequired
}