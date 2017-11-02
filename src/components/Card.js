import React from "react";
import PropTypes from "prop-types";
import Color from "color";
import CopyBtn from "./CopyBtn";
import ColorBox from "./ColorBox";
import AngleSlider from "./AngleSlider";
import "../stylesheets/Card.css";

/**
 * Card
 *
 * @prop {Number} angle        The gradient angle
 * @prop {String} gradientCSS  CSS rule for the app gradient
 * @prop {Color} textColor     The text color that fits the gradient
 * @prop {Object} colors       An object containing "from" and "to" colors
 * @prop {Function} flipColors A function to flip to and from colors
 * @prop {Function} setAngle   A function to set the angle of the gradient
 */
class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = { flipped: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.flipColors();
    this.setState({ flipped: !this.state.flipped });
  }

  render() {
    const btnClass = this.state.flipped ? "flip-btn" : "flip-btn flipped";
    return (
      <div id="card-container">
        <CopyBtn gradientCSS={this.props.gradientCSS} />
        <AngleSlider
          angle={this.props.angle}
          gradientCSS={this.props.gradientCSS}
          textColor={this.props.textColor}
          setAngle={this.props.setAngle}
        />
        <div className="card-colors">
          <ColorBox label="From" color={this.props.colors.from} />
          <div className="flip-container">
            <button className={btnClass} onClick={this.handleClick}>
              <i className="fal fa-exchange" />
            </button>
          </div>
          <ColorBox label="To" color={this.props.colors.to} />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  angle: PropTypes.number.isRequired,
  gradientCSS: PropTypes.string.isRequired,
  textColor: PropTypes.instanceOf(Color).isRequired,
  colors: PropTypes.shape({
    from: PropTypes.instanceOf(Color).isRequired,
    to: PropTypes.instanceOf(Color).isRequired,
  }).isRequired,
  flipColors: PropTypes.func.isRequired,
  setAngle: PropTypes.func.isRequired,
};

export default Card;
