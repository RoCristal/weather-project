import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherIcons code={props.data.icon} size="60px" />

          <span className="temperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
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
