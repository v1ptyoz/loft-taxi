import "./Button.css";

export function Button(props) {
  return (
      <button className="btn" disabled={props.disabled} onClick={props.handler}>{props.caption}</button>
  )
}