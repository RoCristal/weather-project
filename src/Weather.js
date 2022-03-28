import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import ForecastDisplay from "./ForecastDisplay";
import "./Weather.css";
import location from "./location.png";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      minimum: Math.round(response.data.main.temp_min),
      maximum: Math.round(response.data.main.temp_max),
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
    setReady(true);
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "872f5f7a2f23b39c0dad793d7e25a56f";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  //////Locate Me
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      let apiKey = "872f5f7a2f23b39c0dad793d7e25a56f";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    });
  }

  if (ready) {
    return (
      <div className="weather">
        <img
          src={location}
          className="location-icon"
          href="https://www.flaticon.com/free-icons/location"
        ></img>

        <button
          className="btn btn-outline-secondary btn-sm here"
          type="submit"
          onClick={getCurrentLocation}
        >
          Current temperature here
        </button>

        <form onSubmit={handleSubmit} className="d-flex search-bar">
          <input
            onChange={handleCitySearch}
            className="form-control me-2"
            type="search"
            placeholder="Search for a city"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-secondary btn-sm search"
            type="submit"
          >
            Search
          </button>
        </form>

        <WeatherDisplay data={weatherData} />
        <ForecastDisplay data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}
