import React from "react";
import ColorBox from "./ColorBox";
import "../stylesheets/Card.css";

/**
 * Card
 *
 * @prop {String} gradientCSS  CSS rule for the app gradient
 * @prop {Object} colors       An object containing "from" and "to" colors.
 */
class Card extends React.Component {
  render() {
    const circleClass = {
      background: this.props.gradientCSS,
    }
    return (
      <div id="card-container">
        <div className="card-circle" style={circleClass}></div>
        <div className="card-colors">
          <ColorBox label="From" color={this.props.colors.from} />
          <div className="flip-container"><i className="fal fa-exchange"></i></div>
          <ColorBox label="From" color={this.props.colors.to} />
        </div>
      </div>
    )
  }
}

export default Card;
