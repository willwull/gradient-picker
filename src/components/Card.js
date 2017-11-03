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

    this.state = {
      colorFlipped: false,
      cardFlipped: false,
    };

    this.cardFlipTime = 500;
    this.cardIsFlipping = false;

    this.handleClick = this.handleClick.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.flipColors();
    this.setState({ colorFlipped: !this.state.colorFlipped });
  }

  flipCard(e) {
    e.preventDefault();
    this.setState({ cardFlipped: !this.state.cardFlipped });
    console.log(this.state.cardFlipped);
  }

  render() {
    const btnClass = this.state.colorFlipped ? "flip-btn flipped" : "flip-btn";
    const cardClass = this.state.cardFlipped ? "card flipped" : "card";
    return (
      <div id="card-container">
        <div className={cardClass}>
          <div className="card-front">
            <CopyBtn gradientCSS={this.props.gradientCSS} />
            <AngleSlider
              angle={this.props.angle}
              gradientCSS={this.props.gradientCSS}
              textColor={this.props.textColor}
              setAngle={this.props.setAngle}
            />
            <div className="card-colors">
              <ColorBox
                label="From"
                color={this.props.colors.from}
                onClick={this.flipCard}
              />
              <div className="flip-container">
                <button className={btnClass} onClick={this.handleClick}>
                  <i className="fal fa-exchange" />
                </button>
              </div>
              <ColorBox
                label="To"
                color={this.props.colors.to}
                onClick={this.flipCard}
              />
            </div>
          </div>
          <div className="card-back">
            <button
              className="done-btn"
              onClick={this.flipCard}
            >
              Done
            </button>
            <h2>Edit color</h2>
          </div>
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
