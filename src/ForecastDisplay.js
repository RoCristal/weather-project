import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./ForecastDisplay.css";
import axios from "axios";

export default function ForecastDisplay(props) {
  const [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);

    setReady(true);
  }

  function search() {
    let lat = props.data.lat;
    let lon = props.data.lon;
    const apiKey = "872f5f7a2f23b39c0dad793d7e25a56f";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="forecast">
        <span>
          <ForecastDay data={forecast[0]} />
        </span>
        {forecast.map(function (dailyForecast, index) {
          if (index > 1 && index < 6) {
            return (
              <span key={index}>
                <ForecastDay data={dailyForecast} />
              </span>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    search();
    return null;
  }
}
