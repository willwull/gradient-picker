import React from "react";
import "../stylesheets/ColorBox.css";

/**
 * ColorBox
 *
 * @prop {String} label The name of this box
 * @prop {Color} color  The color for this box
 */
class ColorBox extends React.Component {
  render() {
    const boxStyle = {
      backgroundColor: this.props.color,
    }
    return (
      <div className="color-box-container">
        <div className="label">{this.props.label}</div>
        <div className="color-box" style={boxStyle}></div>
        <div className="color-value">{this.props.color.hex()}</div>
      </div>
    )
  }
}

export default ColorBox;
