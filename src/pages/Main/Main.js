import "./Main.css";
import { Header } from "../../components/Header/Header";
import { Map } from "../../components/Map/Map";
import dataContext from "../../context";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

export function Main() {
  const context = useContext(dataContext);
  const location = useLocation();

  return context.isLoggedIn ? (
    <div className="main-page">
      <Header />
      <Map />
    </div>
  ) :
  (
    <Navigate to="login" state={{ from: location }} />
  ) 
}