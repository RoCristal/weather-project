import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="fixed-header"><div className="font">Weather forecast by Ro</div></div>
        <Weather defaultCity="London" />

<div className="fixed-footer">
        <div className="font-footer">GitHub LinkedIn</div>        
    </div>
      </div>
    </div>
  );
}
