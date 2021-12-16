import "./Main.css";
import { Header } from "../../components/Header/Header";
import { Map } from "../../components/Map/Map";
import { useState } from "react";

export function Main(props) {
  let [showModal, setShowModal] = useState(false)
  let [activeLink, setActiveLink] = useState("map");
  function toggleModal(event) {
    event.preventDefault();
    if (showModal) {
      setActiveLink("profile");
    } else {
      setActiveLink("map");
    }
    setShowModal(!showModal);
  }
  return (
    <div className="main-page">
      <Header profileHandler={toggleModal} activeLink={activeLink} />
      <Map showModal={showModal}/>
    </div>
  )
}