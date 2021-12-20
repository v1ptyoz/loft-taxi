import { ProfileForm } from "../ProfileForm/ProfileForm";
import "./Map.css";
import propTypes from "prop-types";

export function Map(props) {
  return (
    <div className="map">
      {props.currentPage === "profile" && <ProfileForm />}
    </div>
  )
}

Map.propTypes = {
  currentPage: propTypes.string.isRequired,
};