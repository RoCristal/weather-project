import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import "./Weather.css";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay ">
      <div className="weather-summary border rounded">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>

      <div className="weather-detail border rounded ">
        <div className="row">
          <div className="col col-12 col-sm-6 icon">
            <WeatherIcons code={props.data.icon} size={60} />

            <div className="temperature">
              <span className="tempVal">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>

          <div className="col col-12 col-sm-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
              <li className="highLow">
                High and low: <strong>{props.data.maximum}°C</strong> /{" "}
                {props.data.minimum}
                °C
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
