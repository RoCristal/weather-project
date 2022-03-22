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

      <div className="weather-detail">
        <div className="row">
          <div className="col col-12 col-sm-6">
            <WeatherIcons code={props.data.icon} size="60px" />

            <div className="temperature">
              <span>
                <WeatherTemperature celsius={props.data.temperature} />
              </span>
            </div>
          </div>

          <div className="col col-12 col-sm-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
              <li>
                <strong>{props.data.maximum}°C</strong> | {props.data.minimum}°C
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
