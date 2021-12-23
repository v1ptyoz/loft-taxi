import { ProfileForm } from "../ProfileForm/ProfileForm";
import "./Map.css";
import propTypes from "prop-types";

export function Map(props) {
  return (
      {props.currentPage === "profile" && <ProfileForm showPage={props.showPage} />}
    </div>
  )
}

Map.propTypes = {
  currentPage: propTypes.string.isRequired,
  showPage: propTypes.func.isRequired
};