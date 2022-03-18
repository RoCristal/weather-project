import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="search-bar d-flex rounded">
        <div className="row">
          <div className="col-9">
            <input
              className=""
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <span className="btn btn-outline-secondary btn-sm">Search</span>
          </div>
        </div>
      </div>
      <div className="weather-summary">
        <h1>New York</h1>
        <ul>
          <li>Friday 13:00</li>
          <li>Fog</li>
        </ul>
      </div>
      <div className="weather-details row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/rain.png"
            alt="fog"
          />
          <span className="temperature">10</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 70%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
