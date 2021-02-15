import React from "react";

function ToggleMaxComnatPoints(props) {
  return (
    <label htmlFor="maxCP" className="max-cp">
      <input
        type="checkbox"
        id="maxCP"
        checked={props.isToggleOn}
        onChange={props.handleToggle}
      />
      <small>Maximum Combat Points</small>
    </label>
  );
}
export default ToggleMaxComnatPoints;
