import "./Login.css";
import logo from "./logo.png"
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { useState } from "react";

export function Login(props) {
  let [formType, setFormType] = useState('login');
  return (
    <div className="login-page">
      <div className="left">
        <img src={logo} alt="Логотип"/>
      </div>
      <div className="right">
        {formType === 'login' && 
          <LoginForm linkHandler={() => setFormType("register")} formHandler={() => props.showPage("main")} />}
        {formType === 'register' && 
          <RegisterForm linkHandler={() => setFormType("login")} formHandler={() => props.showPage("main")} />}  
      </div>
    </div>
  )
}

Login.propTypes = {
  showPage: propTypes.func.isRequired,
}