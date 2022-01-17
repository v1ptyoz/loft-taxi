import "./MapModal.css";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import RoutesList from "../RoutesList/RoutesList";
import { connect } from "react-redux";

function MapModal(props) {
  
  const navigate = useNavigate()

  const handleIfNoCardBtn = () => {
    navigate("/profile");
  }

  return props.card.isExist ? (
      <RoutesList map={props.map}/>
  ) : (
    <div className="modal">
      <p>Для заказа такси необходимо указать платежные данные.</p>
      <p>Для этого нажмите кнопку ниже</p>
      <Button caption="Перейти к вводу данных" onClick={handleIfNoCardBtn}/>
    </div>
  )
}

export default connect(
  (state) => ({card: state.card}),
)(MapModal);