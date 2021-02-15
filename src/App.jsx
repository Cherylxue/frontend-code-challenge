import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Loading from "./Loading";
import PokemonCards from "./PokemonCards";
import SearchBar from "./SearchBar";
import ToggleMaxComnatPoints from "./ToggleMaxCombatPoints";

const URL_PATH =
  "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";

const App = () => {
  const [data, setData] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(URL_PATH);

      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  function handleToggle() {
    setIsToggleOn(!isToggleOn);
  }

  function handleChange(value) {
    setValue(value);

    const res = data.filter(
      (pokemon) =>
        pokemon.Name.toLowerCase().includes(value.toLowerCase()) ||
        pokemon.Types.some((type) =>
          type.toLowerCase().includes(value.toLowerCase())
        )
    );

    setResult(res);
  }

  return (
    <>
      <ToggleMaxComnatPoints
        isToggleOn={isToggleOn}
        handleToggle={handleToggle}
      />
      <SearchBar handleChange={handleChange} />
      {isLoading ? (
        <Loading />
      ) : (
        <PokemonCards result={result} isToggleOn={isToggleOn} value={value} />
      )}
    </>
  );
};

export default App;
