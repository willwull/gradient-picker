import React from "react";
import { CustomPicker } from "react-color";
import { Saturation, Hue } from "react-color/lib/components/common";
import "../stylesheets/ColorPicker.css";

function ColorPicker(props) {
  const satPointer = <div className="pointer" />;
  const huePointer = <div className="pointer" />;
  return (
    <div className="colorpicker">
      <div className="saturation">
        <Saturation
          {...props}
          pointer={() => satPointer}
        />
      </div>
      <div className="hue">
        <Hue
          {...props}
          pointer={() => huePointer}
        />
      </div>
    </div>
  );
}

export default CustomPicker(ColorPicker);
