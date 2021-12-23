import "./Login.css";
import logo from "./logo.png"
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { useContext, useState } from "react";
import dataContext from "../../context";
import propTypes from "prop-types";

export function Login(props) {
  let [formType, setFormType] = useState('login'); 

  const context = useContext(dataContext);

  const formHandler = (event) => {
    event.preventDefault();
    context.login();
    props.showPage("main");
  }

  return (
    <div className="login-page">
      <div className="left">
        <img src={logo} alt="Логотип"/>
      </div>
      <div className="right">
        {formType === 'login' && 
          <LoginForm linkHandler={() => setFormType("register")} formHandler={formHandler} />}
        {formType === 'register' && 
          <RegisterForm linkHandler={() => setFormType("login")} formHandler={formHandler} />}  
      </div>
    </div>
  )
}

Login.propTypes = {
  showPage: propTypes.func.isRequired,
}