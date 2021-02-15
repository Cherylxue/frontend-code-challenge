import React from "react";

function SearchBar(props) {
  function handleChange(e) {
    props.handleChange(e.target.value);
  }
  return (
    <input
      type="text"
      className="input"
      placeholder="Pokemon or type"
      onChange={handleChange}
    />
  );
}

export default SearchBar;
