import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import "./ProfileForm.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { sendCard, getCard } from "../../modules/card"
import { useState } from "react";

function ProfileForm(props) {
  const [cardNumber, setCardNumber] = useState(props.card.cardNumber);
  const [expiryDate, setExpiryDate] = useState(props.card.expiryDate);
  const [cardName, setCardName] = useState(props.card.cardName);
  const [cvc, setCvc] = useState(props.card.cvc);

  const navigate = useNavigate()

  const submit = async (event) => {
    event.preventDefault();
    await props.sendCard({cardNumber, expiryDate, cardName, cvc, token: props.token})
    navigate("/");
  }

  return (
    <div className="profile">
      <form className="profile__form form" onSubmit={submit}>
        <div className="form__wrapper">
          <div className="form__header">
            <h2>Профиль</h2>
            <span>Введите платежные данные</span>
          </div>
          <div className="form__content">
            <div className="form__left">
              <label className="form__input-text">
                <span>Имя владельца</span>
                <input type="text" value={cardName} onInput={(event) => { setCardName(event.target.value) }} />
              </label>
              <label className="form__input-text">
                <span>Номер карты</span>
                <input type="number" value={cardNumber} onInput={(event) => { setCardNumber(event.target.value) }} />
              </label>
              <div className="form__group">
                <label className="form__input-text">
                  <span>MM/YY</span>
                  <input type="text" value={expiryDate} onInput={(event) => { setExpiryDate(event.target.value) }} />
                </label>
                <label className="form__input-text">
                  <span>CVC</span>
                  <input type="number" value={cvc} onInput={(event) => { setCvc(event.target.value) }}/>
                </label>
              </div>
            </div>
            <div className="form__right">
              <Card cardName={cardName} cardNumber={cardNumber} expiryDate={expiryDate} cvc={cvc} />
            </div>
          </div>
          <div className="form__buttons">
            <Button caption="Сохранить" type="submit"></Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default connect(
  (state) => ({card: state.card, token: state.user.token}),
  { sendCard, getCard }
)(ProfileForm);