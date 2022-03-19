import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="London" />

        <footer>
          Coded by Romina Cristaldo. {""}Open source on
          <a
            href="https://github.com/RoCristal/weather-project"
            target="_blank"
            rel="noopener  noreferrer"
          >
            <strong> GitHub</strong>
          </a>
        </footer>
      </div>
    </div>
  );
}
