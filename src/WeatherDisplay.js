import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <div className="weather-summary">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="weather-details row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt="weather-icon" />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
