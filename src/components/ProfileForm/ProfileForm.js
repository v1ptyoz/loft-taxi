import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import "./ProfileForm.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { sendCard, getCard } from "../../modules/card"
import { useEffect, useState } from "react";
import messages from "../../modules/errors";
import { useForm } from "react-hook-form";

function ProfileForm(props) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      cardNumber: props.card.cardNumber,
      expiryDate: props.card.expiryDate,
      cardName: props.card.cardName,
      cvc: props.card.cvc,
    }
  });
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardName, setCardName] = useState("");
  const [cvc, setCvc] = useState("");
  const [isSaveBtnClicked, setIsSaveBtnClicked] = useState(false);

  useEffect(() => {
    if (props.card) {
      setCardNumber(props.card.cardNumber);
      setExpiryDate(props.card.expiryDate);
      setCardName(props.card.cardName);
      setCvc(props.card.cvc);
    }
  }, [props.card])

  const navigate = useNavigate()

  const submit = async data => {
    const {cardNumber, expiryDate, cardName, cvc} = data;
    await props.sendCard({cardNumber, expiryDate, cardName, cvc, token: props.token})
    setIsSaveBtnClicked(true)
  }

  const goToMapBtnHandler = () => {
    navigate("/");
  }

  return !isSaveBtnClicked ? (
    <div className="profile">
      <form className="profile__wrapper form" onSubmit={handleSubmit(submit)}>
        <div className="form__wrapper">
          <div className="form__header">
            <h2>Профиль</h2>
            <span>Введите платежные данные</span>
          </div>
          <div className="error-block">
              {props.cardError && <p className="error-message">{props.cardError}</p>}
            </div>
          <div className="form__content">
            <div className="form__left">
              <label className="form__input-text">
                <span>Имя владельца</span>
                <input 
                  type="text" 
                  value={cardName} 
                  {...register("cardName", {required: {value: true, message: messages.required}})}
                  onInput={(event) => { setCardName(event.target.value) }} />
              </label>
              {errors.cardName && <p className="error-message">{errors.cardName.message}</p>}
              <label className="form__input-text">
                <span>Номер карты</span>
                <input 
                  type="number" 
                  value={cardNumber}
                  {...register("cardNumber", {required: {value: true, message: messages.required}, minLength: {value: 16, message: messages.minLen(16)}, maxLength: {value: 18, message: messages.maxLen(18)}})}
                  onInput={(event) => { setCardNumber(event.target.value) }} />
              </label>
              {errors.cardNumber && <p className="error-message">{errors.cardNumber.message}</p>}
              <div className="form__group">
                <label className="form__input-text">
                  <span>MM/YY</span>
                  <input 
                    type="text" 
                    value={expiryDate} 
                    {...register("expiryDate", {required: {value: true, message: messages.required} })}
                    onInput={(event) => { setExpiryDate(event.target.value) }} />
                  {errors.expiryDate && <p className="error-message error-message--mt0">{errors.expiryDate.message}</p>}
                </label>
                <label className="form__input-text">
                  <span>CVC</span>
                  <input 
                    type="number" 
                    value={cvc} 
                    {...register("cvc", {required: {value: true, message: messages.required} })}
                    onInput={(event) => { setCvc(event.target.value) }}/>
                  {errors.cvc && <p className="error-message error-message--mt0">{errors.cvc.message}</p>}
                </label>
              </div>
            </div>
            <div className="form__right">
              <Card cardName={cardName} cardNumber={cardNumber} expiryDate={expiryDate} cvc={cvc} />
            </div>
          </div>
          <div className="form__buttons">
            <Button caption="Сохранить" type="submit" disabled={props.card.loading} isLoading={props.card.loading} />
          </div>
        </div>
      </form>
    </div>
  ) : (
    <div className="profile">
      <div className="profile__wrapper">
        <h1>Профиль</h1>
        <p className="profile__text">Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
        <Button caption="Перейти на карту" onClick={goToMapBtnHandler}/>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({card: state.card, token: state.user.token, cardError: state.card.error}),
  { sendCard, getCard }
)(ProfileForm);