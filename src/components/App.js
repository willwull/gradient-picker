import React from "react";
import Color from "color";
import Card from "./Card";
import "../stylesheets/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    const fromColor = new Color("#FF9A9E");
    const toColor = new Color("#FAD0C4");

    this.state = {
      angle: 90,
      colors: {
        from: fromColor,
        to: toColor,
      },
    }

    this.getGradientCSS = this.getGradientCSS.bind(this);
  }

  getGradientCSS() {
    const angle = this.state.angle;
    const from = this.state.colors.from;
    const to = this.state.colors.to;
    const css = `linear-gradient(${angle}deg, ${from}, ${to})`;
    return css;
  }

  getTextColor() {
    const from = this.state.colors.from;
    const to = this.state.colors.to;
    const middle = from.mix(to);
    const textColor = middle.luminosity() < 0.5 ? "#454545" : "white";
    return textColor;
  }

  render() {
    const gradientCSS = this.getGradientCSS()
    const textColor = this.getTextColor();
    const containerStyle = {
      background: gradientCSS,
      color: textColor,
    }
    return (
      <div id="app-container" style={containerStyle}>
        <div className="app-inner">
          <Card gradientCSS={gradientCSS} colors={this.state.colors} />
          <p className="credits">
            Created by <a href="https://willwull.github.io" title="My website">
            willwull <i className="fal fa-external-link"></i></a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
