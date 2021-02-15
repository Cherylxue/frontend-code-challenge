import React from "react";
import NoResultCard from "./NoResultCard";
import PokemonCard from "./PokemonCard";
function PokemonCards(props) {
  const result = props.result;
  const sortResult = sortRes(props.result);

  function sortRes(res) {
    const resCopy = [...res];
    resCopy.sort((a, b) => b.MaxCP - a.MaxCP);
    return resCopy;
  }

  const res = props.isToggleOn ? sortResult : result;

  console.log(res);
  return (
    <ul className="suggestions">
      {props.value === "" ? (
        <NoResultCard />
      ) : (
        res.map((pokemon) => {
          if (res.indexOf(pokemon) < 4) {
            // console.log(res.indexOf(pokemon));
            // console.log(pokemon.MaxCP);
            return (
              <PokemonCard
                img={pokemon.img}
                types={pokemon.Types}
                name={pokemon.Name}
                value={props.value}
                key={res.indexOf(pokemon)}
              />
            );
          }
          return null;
        })
      )}
    </ul>
  );
}

export default PokemonCards;
