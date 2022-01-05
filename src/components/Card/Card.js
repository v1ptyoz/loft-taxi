import "./Card.css";

export function Card(props) {
  return (
    <div className="card">
      <div className="card__field card__field--date">{props.expiryDate}</div>
      <div className="card__field card__field--number">{props.cardNumber}</div>
      <div className="card__field card__field--cvc">{props.cvc}</div>
    </div>
  )
}