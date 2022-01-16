import "./Map.css";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { Outlet } from "react-router-dom";
import RoutesForm from "../RoutesForm/RoutesForm";

export function Map() {
  mapboxgl.accessToken = 'pk.eyJ1IjoidjFwdHlveiIsImEiOiJja3hoMXVyYnUyM3dnMnZxcXQyaGhwbXB2In0.MlLKjuFJNF9iMzHLLeT1tg';
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  useEffect( () => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [30.3228,59.9327],
      zoom: 12
    });
    
    return () => map.remove();
  }, [])
  
  return (
    <div className="map">
      <div className="map__container" ref={mapContainer} data-testid="map">
        <RoutesForm map={map} />
        <Outlet />
      </div>
    </div>
  )
}