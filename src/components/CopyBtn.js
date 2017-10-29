import React from "react";
import PropTypes from "prop-types";
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
    this.clip = new Clipboard(".copy-btn");
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
    return (
      <button
        className={btnClass}
        data-clipboard-text={this.getCopyText()}
        onClick={this.handleClick}
        onMouseOut={this.handleMouseOut}
        onBlur={this.handleMouseOut}
      >
        <i className="fal fa-copy" /> {copyText}
      </button>
    );
  }
}

CopyBtn.propTypes = {
  gradientCSS: PropTypes.string.isRequired,
};

export default CopyBtn;
