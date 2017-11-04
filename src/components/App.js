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
    };

    this.setColors = this.setColors.bind(this);
    this.setAngle = this.setAngle.bind(this);
    this.flipColors = this.flipColors.bind(this);
    this.getGradientCSS = this.getGradientCSS.bind(this);
    this.getTextColor = this.getTextColor.bind(this);
  }

  setColors(newColors) {
    this.setState({ colors: newColors });
  }

  setAngle(angle) {
    this.setState({ angle });
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
    return new Color(textColor);
  }

  flipColors() {
    const fromColor = this.state.colors.from;
    const toColor = this.state.colors.to;
    this.setState({
      colors: {
        from: toColor,
        to: fromColor,
      },
    });
  }

  render() {
    const gradientCSS = this.getGradientCSS();
    const textColor = this.getTextColor();
    const containerStyle = {
      background: gradientCSS,
      color: textColor,
    };
    return (
      <div id="app-container" style={containerStyle}>
        <div className="app-inner">
          <Card
            angle={this.state.angle}
            gradientCSS={gradientCSS}
            textColor={textColor}
            colors={this.state.colors}
            flipColors={this.flipColors}
            setAngle={this.setAngle}
            setColors={this.setColors}
          />
          <p className="credits">
            Created by&nbsp;
            <a href="https://github.com/willwull/gradient-picker" title="My website">
              willwull <i className="fal fa-external-link" />
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
