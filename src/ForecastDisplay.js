import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./ForecastDisplay.css";

export default function ForecastDisplay(props) {
  return (
    <div className="row forecast">
      <div className="col">
        <div className="day">Mon</div>
        <WeatherIcons code="09n" size="40px" />
        <div className="temp">
          <span className="max">19°C</span>
          <span className="min">12°C</span>
        </div>
      </div>
    </div>
  );
}
