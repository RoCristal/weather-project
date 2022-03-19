import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span>{Math.round(props.celsius)}</span>
        <span className="unit">
          <a href="/">
            <strong size="60px">°C</strong>
            {""}|{""}
          </a>
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span>{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C {""}
          </a>
          |{""}{" "}
          <a href="/">
            <strong>°F</strong>
          </a>
        </span>
      </div>
    );
  }
}
