import React from "react";

function PokemonCard(props) {
  const { img, types, name, value } = props;
  const highLightIndex = name.toLowerCase().search(value.toLowerCase());

  return (
    <li>
      <img src={img} alt="" />
      <div className="info">
        <h1>
          {name.toLowerCase().includes(value.toLowerCase()) ? (
            <>
              {name.substring(0, highLightIndex)}
              <span className="hl">
                {name.substring(highLightIndex, value.length + highLightIndex)}
              </span>
              {name.substring(highLightIndex + value.length)}
            </>
          ) : (
            name
          )}
        </h1>
        {types.map((type) => (
          <span
            className={`type ${type.toLowerCase()}`}
            key={types.indexOf(type)}
          >
            {type}
          </span>
        ))}
        {/* <span className="type electric">Electric</span>
        <span className="type normal">Normal</span> */}
      </div>
    </li>
  );
}

export default PokemonCard;
