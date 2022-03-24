import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./ForecastDisplay.css";
import axios from "axios";

export default function ForecastDisplay(props) {
  const [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    //if props change
    setReady(false);
  }, [props.data]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  function search() {
    let lat = props.data.lat;
    let lon = props.data.lon;
    let units = props.unitsChosen;
    console.log(`from weather display ${units}`);
    const apiKey = "872f5f7a2f23b39c0dad793d7e25a56f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="row forecast">
        {forecast.map(function (dailyForecast, index) {
          if (index > 0 && index < 6) {
            return (
              <div className="col" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
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
