import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/rain.png",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <form className="d-flex search-bar">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for a city"
            aria-label="Search"
          />
          <button className="btn btn-outline-secondary btn-sm" type="submit">
            Search
          </button>
        </form>

        <div className="weather-summary">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Friday 13:00</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="weather-details row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt="weather-icon" />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "872f5f7a2f23b39c0dad793d7e25a56f";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading ...";
  }
}
