import "./Card.css";

export function Card(props) {
  return (
    <div className="card">
      <div className="card__field card__field--date">05/08</div>
      <div className="card__field card__field--number">1234 5678 9012 3456 44</div>
      <div className="card__field card__field--cvc">123</div>
    </div>
  )
}