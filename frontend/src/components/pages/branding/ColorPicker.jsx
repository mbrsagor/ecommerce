import React from "react";

function ColorPicker({ title, color, onChange }) {
  return (
    <>
      <label>{title}</label>
      <div className="input-group p-2 border rounded d-flex align-items-center">
        <input type="color" value={color} onChange={onChange} />
        <span className="text-uppercase ml-2"> {color} </span>
      </div>
    </>
  );
}

export default ColorPicker;
