import { ProfileForm } from "../ProfileForm/ProfileForm";
import "./Map.css";

export function Map(props) {
  return (
    <div className="map">
      {props.currentPage === "profile" && <ProfileForm />}
    </div>
  )
}