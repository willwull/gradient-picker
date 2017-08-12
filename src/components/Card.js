import React from "react";
import Clipboard from "clipboard";
import ColorBox from "./ColorBox";
import "../stylesheets/Card.css";

/**
 * Card
 *
 * @prop {String} gradientCSS  CSS rule for the app gradient
 * @prop {Color} textColor     The text color that fits the gradient
 * @prop {Object} colors       An object containing "from" and "to" colors
 * @prop {Function} flipColors A function to flip to and from colors
 */
class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = { flipped: false };

    new Clipboard(".copy-btn");

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.flipColors();
    this.setState({ flipped: !this.state.flipped });
  }

  getCopyText() {
    return `background: ${this.props.gradientCSS};`;
  }

  render() {
    const circleStyle = {
      background: this.props.gradientCSS,
      color: this.props.textColor,
    };
    const btnClass = this.state.flipped ? "flip-btn" : "flip-btn flipped";
    return (
      <div id="card-container">
        <button className="copy-btn" data-clipboard-text={this.getCopyText()}>
          <i className="fal fa-copy"></i> Copy CSS
        </button>
        <div className="card-circle" style={circleStyle}></div>
        <div className="card-colors">
          <ColorBox label="From" color={this.props.colors.from} />
          <div className="flip-container">
            <button className={btnClass} onClick={this.handleClick}>
              <i className="fal fa-exchange"></i>
            </button>
          </div>
          <ColorBox label="To" color={this.props.colors.to} />
        </div>
      </div>
    )
  }
}

export default Card;
