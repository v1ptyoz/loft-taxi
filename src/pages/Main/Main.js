import "./Main.css";
import { Header } from "../../components/Header/Header";
import { Map } from "../../components/Map/Map";

export function Main(props) {
  return (
    <div className="main-page">
      <Header currentPage={props.currentPage} showPage={props.showPage} />
      <Map currentPage={props.currentPage}/>
    </div>
  )
}