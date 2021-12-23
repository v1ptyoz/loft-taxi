import { ProfileForm } from "../ProfileForm/ProfileForm";
import "./Map.css";
import propTypes from "prop-types";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

export function Map(props) {
  mapboxgl.accessToken = 'pk.eyJ1IjoidjFwdHlveiIsImEiOiJja3hoMXVyYnUyM3dnMnZxcXQyaGhwbXB2In0.MlLKjuFJNF9iMzHLLeT1tg';
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [37.617587104605946,55.7513142251542],
      zoom: 15
    });
    return () => map.remove();
  }, [])
  
  return (
    <div className="map" ref={mapContainer}>
      {props.currentPage === "profile" && <ProfileForm showPage={props.showPage} />}
    </div>
  )
}

Map.propTypes = {
  currentPage: propTypes.string.isRequired,
  showPage: propTypes.func.isRequired
};