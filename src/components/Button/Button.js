import "./Button.css";
import propTypes from "prop-types";
import {TailSpin} from "react-loader-spinner";

export function Button(props) {
  return (
      <button 
        type={props.type}
        className="btn"
        disabled={props.disabled}
        onClick={props.onClick}>
        {props.isLoading && <TailSpin color="#ffffff" width={40} height={40} />}
        {!props.isLoading && props.caption}
      </button>
  )
}

Button.propTypes = {
  type: propTypes.string,
  disabled: propTypes.bool,
  caption: propTypes.string
}