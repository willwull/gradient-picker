import React from "react";
import PropTypes from "prop-types";
import Color from "color";
import CircleSlider from "circle-slider";
import "../stylesheets/AngleSlider.css";

/**
 * AngleSlider
 *
 * @prop {Number} angle        The gradient angle
 * @prop {String} gradientCSS  CSS rule for the app gradient
 * @prop {Color} textColor     The text color that fits the gradient
 * @prop {Function} setAngle   A function to set the angle of the gradient
 */
class AngleSlider extends React.Component {
  componentDidMount() {
    const options = {
      snap: 45,
      clockwise: true,
      startPos: "top",
    };
    this.cs = new CircleSlider("card-circle", options);
    this.cs.setAngle(this.props.angle);
    this.cs.on("sliderMove", (angle) => {
      this.props.setAngle(angle);
    });
  }

  render() {
    const circleStyle = {
      background: this.props.gradientCSS,
      color: this.props.textColor,
    };
    return (
      <div id="card-circle" style={circleStyle} />
    );
  }
}

AngleSlider.propTypes = {
  angle: PropTypes.number.isRequired,
  gradientCSS: PropTypes.string.isRequired,
  textColor: PropTypes.instanceOf(Color).isRequired,
  setAngle: PropTypes.func.isRequired,
};

export default AngleSlider;
