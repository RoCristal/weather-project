import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import "./Weather.css";

export default function WeatherDisplay(props) {

  return (
    <div className="WeatherDisplay ">
      <div className="weather-summary border rounded">
        <div className="row">
          <div className="col-6 icon">
        <h1>{props.data.city}</h1>
        
        <WeatherIcons code={props.data.icon} size={60} />
         <div className="temperature">
              <span className="tempVal">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div></div>
          

          <div className="col-6 d-flex align-items-center">
            <ul>
              
              <li><FormattedDate date={props.data.date} /></li>
              <br></br>
              <li className="highLow">
                <strong>{props.data.maximum}°</strong> /{" "}
                {props.data.minimum}°
              </li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
