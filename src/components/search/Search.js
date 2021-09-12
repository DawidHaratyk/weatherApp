import React, { useState } from "react";
import Card from "../card/Card";

const apiBase = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "f354d30d7f42145bb79338aff54efe7d";

const Search = () => {
  const [isCardActive, setIsCardActive] = useState(false);
  const [currentPlace, setCurrentPlace] = useState({});

  const handleSubmit = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value) {
      fetch(`${apiBase}${value}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((result) => {
          if (result.cod === 200) {
            setCurrentPlace(result);
            setIsCardActive(true);
          } else {
            alert("Type the correct place...");
            return;
          }
        });
    }
  };

  return (
    <>
      <input
        type="text"
        className="weather__search"
        placeholder="What city?"
        onKeyDown={(e) => handleSubmit(e)}
      />
      {isCardActive ? <Card currentPlace={currentPlace} /> : null}
    </>
  );
};

export default Search;
