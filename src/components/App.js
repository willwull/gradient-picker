import React from "react";
import "../stylesheets/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: 90,
      gradient: {
        from: "#FF9A9E",
        to: "#FAD0C4",
      },
    }
  }

  render() {
    const angle = this.state.angle;
    const from = this.state.gradient.from;
    const to = this.state.gradient.to;
    const containerStyle = {
      background: `linear-gradient(${angle}deg, ${from}, ${to})`,
    }
    return (
      <div id="app-container" style={containerStyle}>

      </div>
    );
  }
}

export default App;
