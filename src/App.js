import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="fixed-header"><div className="font">
           <a
                href="https://rocristal-portfolio.netlify.app/"
                title="Dictionary"
                target="_blank" rel="noreferrer"
              >Weather forecast by Ro</a> 
          
          </div></div>
        <Weather defaultCity="London" />

<div className="fixed-footer">
        <div className="font-footer">
          <div className="row"> 
          <div  className="col"><a className="footer-left"
                href="https://github.com/RoCristal/weather-project"
                title="Dictionary"
                target="_blank" rel="noreferrer"
              >GitHub</a> </div>
          <div className="col"><a className="footer-right"
                href="https://www.linkedin.com/in/rominacristaldo/"
                title="Dictionary"
                target="_blank" rel="noreferrer"
              >LinkedIn</a>
              </div>
              </div>
              </div>        
    </div>
      </div>
    </div>
  );
}
