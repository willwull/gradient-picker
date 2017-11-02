import React from "react";
import PropTypes from "prop-types";
import Color from "color";
import "../stylesheets/ColorBox.css";

/**
 * ColorBox
 *
 * @prop {String} label      The name of this box
 * @prop {Color} color       The color for this box
 * @prop {Function} onClick  What happens when clicking on the color box
 */
function ColorBox(props) {
  const boxStyle = {
    backgroundColor: props.color,
  };
  return (
    <div className="color-box-container">
      <div className="label">{props.label}</div>
      <button className="color-box" style={boxStyle} onClick={props.onClick} />
      <div className="color-value">{props.color.hex()}</div>
    </div>
  );
}

ColorBox.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.instanceOf(Color).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ColorBox;
