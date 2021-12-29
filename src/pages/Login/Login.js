import "./Login.css";
import logo from "./logo.png"
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import propTypes from "prop-types";

export function Login(props) {
  return (
    <div className="login-page">
      <div className="left">
        <img src={logo} alt="Логотип"/>
      </div>
      <div className="right">
        {props.formType === 'login' && 
          <LoginForm />}
        {props.formType === 'register' && 
          <RegisterForm />}  
      </div>
    </div>
  )
}

Login.propTypes = {
  formType: propTypes.string.isRequired
}