import React from "react";
import Clipboard from "clipboard";
import "../stylesheets/CopyBtn.css";

/**
 * CopyBtn
 *
 * @prop {String} gradientCSS  CSS rule for the app gradient
 */
class CopyBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    new Clipboard(".copy-btn");
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  getCopyText() {
    return `background: ${this.props.gradientCSS};`;
  }

  handleClick() {
    this.setState({ copied: true });
  }

  handleMouseOut() {
    this.setState({ copied: false });
  }

  render() {
    const btnClass = this.state.copied ? "copy-btn anim" : "copy-btn";
    const copyText = this.state.copied ? "Copied!" : "Copy CSS";
    return(
      <button className={btnClass} data-clipboard-text={this.getCopyText()}
        onClick={this.handleClick} onMouseOut={this.handleMouseOut}
      >
        <i className="fal fa-copy"></i> {copyText}
      </button>
    )
  }
}

export default CopyBtn;
