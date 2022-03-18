import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="btn btn-primary">Search</div>
      <h1>New York</h1>
      <ul>
        <li>Friday 13:00</li>
        <li>Fog</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
            alt="fog"
          />
          <span className="temp">10°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 70%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
      Hello from weather
    </div>
  );
}
