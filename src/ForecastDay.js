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
    <div className="weather-summary border rounded">

<div className="row">
  <div className="col-6">    
     <WeatherIcons code={props.data.weather[0].icon} size={40} />
     <div className="col-3 temp">
          <span className="max">{maxTemp()}</span>/
          <span className="min">{minTemp()}</span>
        </div>
    </div>
    <div className="col-6"> 
      <span className="col day">{day()}</span> </div>
  </div>
    </div>
  );
}
