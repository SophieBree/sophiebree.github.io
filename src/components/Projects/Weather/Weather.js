import React from "react";
import weather from "./weather.png";

export default function Weather() {
  return (
    <div className="project-container-single">
      <div className="weather">
      <div className="project-title-container">
          <h2 className="project-title">Weather App</h2>
          <a href="https://github.com/SophieBree/weather-app">
            <i className="devicon-github-original"></i>
          </a>
          <a href="https://reverent-lamarr-7cbc8c.netlify.app/">
            <i className="devicon-firefox-plain"></i>
          </a>
        </div>
        <a href="https://reverent-lamarr-7cbc8c.netlify.app/">
          <img className="weather-project-image project-image" src={weather} alt="Homepage of my weather app." />
        </a>
      </div>
      <ul className="project-description">
        <li>This is an independent project I made to test my ability to access data from an API and display it to the user on a webpage.</li>
        <li>
          It was also a good opportunity to test my knowledge of <strong>React</strong>, and how to store API keys securely using <strong>Netlify functions.</strong>
        </li>
        <li>
          The project features detailed weather reports about the current and forecasted
          conditions from any location in Australia.
        </li>
      </ul>
    </div>
  );
}
