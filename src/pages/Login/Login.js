import "./Login.css";
import logo from "./logo.png"
import LoginForm from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function Login(props) {
  return !props.isLoggedIn ? (
    <div className="login-page">
      <div className="left">
        <Link to={"/"}>
          <img src={logo} alt="Логотип"/>
        </Link>
      </div>
      <div className="right">
        {props.formType === 'login' && 
          <LoginForm />}
        {props.formType === 'register' && 
          <RegisterForm />}  
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  )
}

export default connect(
  (state) => ({isLoggedIn: state.user.isLoggedIn}),
)(Login);

Login.propTypes = {
  formType: propTypes.string.isRequired
}