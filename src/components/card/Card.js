import React from "react";
import dayImage from "../../img/day_image.svg";
import nightImage from "../../img/night_image.svg";

const Card = (currentPlace) => {
  const {
    name,
    main: { temp, temp_max, temp_min, feels_like, humidity },
    weather: [{ description, icon }],
  } = currentPlace.currentPlace;

  const colorCondition = temp.toString().substr(0, 2) > 29 ? null : "white";
  const backgroundCondition =
    temp.toString().substr(0, 2) > 29 ? dayImage : nightImage;
  return (
    <div className="card">
      <img
        src={backgroundCondition}
        alt="weather"
        className="card__weather-img"
      />
      <div className="card__description">
        <h4 className={`card__place ${colorCondition}`}>{name}</h4>
        <div className="card__circles">
          <span className={`card__circle ${colorCondition}`}></span>
          <span className={`card__circle ${colorCondition}`}></span>
          <span className={`card__circle ${colorCondition}`}></span>
        </div>
        <div className="card__temperature-container">
          <h1 className="card__temperature">
            {temp.toString().substr(0, 2)}°C
          </h1>
          <div className="card__average-temperature">
            <span className="card__weather">{description}</span>
            <p className="card__text">
              Max: {temp_max.toString().substr(0, 2)}°C
            </p>
            <p className="card__text">
              Min: {temp_min.toString().substr(0, 2)}°C
            </p>
          </div>
        </div>
        <div className="card__weather-img-container">
          <img
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt="weather"
            className="card__weather-image"
          />
        </div>
        <div className="card__weather-details">
          <div className="card__weather-detail">
            <h2 className="card__weather-feeling">
              {feels_like.toString().substr(0, 2)}°C
            </h2>
            <p className="card__text">Feels like</p>
          </div>
          <div className="card__weather-detail">
            <h2 className="card__weather-feeling">{humidity}%</h2>
            <p className="card__text">Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
