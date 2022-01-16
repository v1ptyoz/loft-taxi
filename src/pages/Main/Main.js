import "./Main.css";
import Header from "../../components/Header/Header";
import { Map } from "../../components/Map/Map";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

function Main(props) {
  return props.isLoggedIn ? (
    <div className="main-page">
      <Header />
      <Map />
    </div>
  ) :
  (
    <Navigate to="login" />
  ) 
}

export default connect(
  (state) => ({isLoggedIn: state.user.isLoggedIn}),
)(Main);