import "./Map.css";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { Outlet } from "react-router-dom";

export function Map() {
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
    <div className="map" ref={mapContainer} data-testid="map">
      <Outlet />
    </div>
  )
}