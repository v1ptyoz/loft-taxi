import "./Main.css";
import { Header } from "../../components/Header/Header";
import { Map } from "../../components/Map/Map";
import propTypes from "prop-types";

export function Main(props) {
    
  return (
    <div className="main-page">
      <Header currentPage={props.currentPage} showPage={props.showPage} />
      <Map currentPage={props.currentPage} showPage={props.showPage} />
    </div>
  )
}

Main.propTypes = {
  currentPage: propTypes.string.isRequired,
  showPage: propTypes.func.isRequired,
};