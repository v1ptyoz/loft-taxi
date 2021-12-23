import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import "./ProfileForm.css";
import propTypes from "prop-types";

export function ProfileForm() {
  return (
    <div className="profile">
      <form className="profile__form form">
        <div className="form__wrapper">
          <div className="form__header">
            <h2>Профиль</h2>
            <span>Введите платежные данные</span>
          </div>
          <div className="form__content">
            <div className="form__left">
              <label className="form__input-text">
                <span>Имя владельца</span>
                <input type="text" />
              </label>
              <label className="form__input-text">
                <span>Номер карты</span>
                <input type="number" />
              </label>
              <div className="form__group">
                <label className="form__input-text">
                  <span>MM/YY</span>
                  <input type="text" />
                </label>
                <label className="form__input-text">
                  <span>CVC</span>
                  <input type="number" />
                </label>
              </div>
            </div>
            <div className="form__right">
              <Card />
            </div>
          </div>
          <div className="form__buttons">
            <Button caption="Сохранить"></Button>
          </div>
        </div>
      </form>
    </div>
  )
}

ProfileForm.propTypes = {
  showPage: propTypes.func.isRequired
}