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
           <a className="footer-left"
                href="https://rocristal-portfolio.netlify.app/"
                title="Dictionary"
                target="_blank" rel="noreferrer"
              >GitHub</a> 
               <a className="footer-right"
                href="https://rocristal-portfolio.netlify.app/"
                title="Dictionary"
                target="_blank" rel="noreferrer"
              >_____________LinkedIn</a> 
          
           </div>        
    </div>
      </div>
    </div>
  );
}
