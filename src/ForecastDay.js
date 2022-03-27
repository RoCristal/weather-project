import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="forecastDay border rounded">
      <div className="row justify-content-start">
        <div className="col-sm-3  day">{day()}</div>
        <div className="col-sm-3">
          <WeatherIcons code={props.data.weather[0].icon} size={40} />
        </div>
        <div className="col-sm-3 description">
          {props.data.weather[0].description}
        </div>
        <div className="col-sm-3 temp">
          {" "}
          <span className="max">{maxTemp()}</span>/
          <span className="min">{minTemp()}</span>
        </div>
      </div>
    </div>
  );
}
