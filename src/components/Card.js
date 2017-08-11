import React from "react";
import "../stylesheets/Card.css";

/**
 * Card
 *
 * @prop {String} gradientCSS  CSS rule for the app gradient
 */
class Card extends React.Component {
  render() {
    const circleClass = {
      background: this.props.gradientCSS,
    }
    return (
      <div id="card-container">
        <div className="card-circle" style={circleClass}></div>
      </div>
    )
  }
}

export default Card;
