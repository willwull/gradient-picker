import React from "react";
import Card from "./Card";
import "../stylesheets/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: 90,
      colors: {
        from: "#FF9A9E",
        to: "#FAD0C4",
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

  render() {
    const gradientCSS = this.getGradientCSS()
    const containerStyle = {
      background: gradientCSS,
    }
    return (
      <div id="app-container" style={containerStyle}>
        <div className="app-inner">
          <Card gradientCSS={gradientCSS} />
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
