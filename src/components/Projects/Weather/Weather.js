import React from "react";
import weather from "./weather.png";

export default function Weather() {
  return (
    <div>
      <div className="project-container-single weather">
        <h2 className="project-title">Weather App</h2>
        <a href="https://reverent-lamarr-7cbc8c.netlify.app/">
          <img className="weather-project-image" src={weather} alt="" />
        </a>
      </div>
      <ul>
        <li>Made using React, hosted on Netlify</li>
        <li>
          Demonstrates ability to access data from API and display it
          beautifully on a webpage.
        </li>
        <li>
          Features detailed weather reports about the current and forecasted
          conditions.
        </li>
      </ul>
    </div>
  );
}
