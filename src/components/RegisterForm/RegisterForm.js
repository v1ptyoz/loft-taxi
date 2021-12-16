import "./RegisterForm.css";
import { Button } from "../Button/Button";
import { useState } from "react";

export function RegisterForm(props) {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [name, setName] = useState();
  let [disabled, setDisabled] = useState(true);

  function checkInput() {
    setDisabled();
  }
  setDisabled = () => {
    if (email && password && name) {
      disabled = false;
    } else {
      disabled = true;
    }
  }
  checkInput();

  return (
    <form className="form">
      <div className="form__wrapper">
        <div className="form__header">
          <h2>Регистрация</h2>
        </div>
        <div className="form__content">
          <label className="form__input-text">
            <span>Email</span>
            <input type="text" placeholder="Email" onInput={(event) => {setEmail(event.target.value)}}/>
          </label>
          <label className="form__input-text">
            <span>Как вас зовут</span>
            <input type="text" placeholder="Введите имя" onInput={(event) => {setName(event.target.value)}}/>
          </label>
          <label className="form__input-text">
            <span>Придумайте пароль</span>
            <input type="password" placeholder="Пароль" onInput={(event) => {setPassword(event.target.value)}}/>
          </label>
          <Button caption="Войти" disabled={disabled} handler={props.formHandler} />
          <div className="form__footer">
            Уже зарегистрированы?
            <a href="/login" onClick={props.linkHandler}>Войти</a>
          </div>
        </div>
      </div>
    </form>
  )
}