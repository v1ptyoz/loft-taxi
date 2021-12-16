import "./Login.css";
import logo from "./logo.png"
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { useState } from "react";

export function Login(props) {
  let [formType, setFormType] = useState('login');
  function showLoginForm(event) {
    event.preventDefault();
    setFormType("login");
  }
  function showRegisterForm(event) {
    event.preventDefault();
    setFormType("register")
  }

  function showForm() {
    switch (formType) {
      case "login":
        return (
          <LoginForm linkHandler={showRegisterForm} formHandler={props.onLogin} />
        )
      case "register":
        return (
          <RegisterForm linkHandler={showLoginForm} formHandler={props.onLogin} />
        )
      default:
        break;
    }
  }
  return (
    <div className="login-page">
      <div className="left">
        <img src={logo} alt="Логотип"/>
      </div>
      <div className="right">
        {showForm()}
      </div>
    </div>
  )
}