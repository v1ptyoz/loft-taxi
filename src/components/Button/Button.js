import "./Button.css";
import propTypes from "prop-types";

export function Button(props) {
  return (
      <button type={props.type} className="btn" disabled={props.disabled}>{props.caption}</button>
  )
}

Button.propTypes = {
  type: propTypes.string,
  disabled: propTypes.bool,
  caption: propTypes.string
}