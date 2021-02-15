import React from "react";

function NoResultCard() {
  return (
    <li>
      <img
        src="https://cyndiquil721.files.wordpress.com/2014/02/missingno.png"
        alt=""
      />
      <div className="info">
        <h1 className="no-results">No results</h1>
      </div>
    </li>
  );
}

export default NoResultCard;
