import React from "react";
import weather from "./weather.png";

export default function Weather() {
  return (
    <div className="project-container-single">

        <div className="project-title-container">
          <h2 className="project-title">Weather App</h2>
          <div className="project-links">
            <a href="https://next-weather-app-seven.vercel.app/">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://next-weather-app-seven.vercel.app/">
              <i className="devicon-firefox-plain"></i>
            </a>
          </div>
        </div>
        <a href="https://next-weather-app-seven.vercel.app/">
          <img
            className="weather-project-image project-image"
            src={weather}
            alt="Homepage of my weather app."
          />
        </a>

      <ul className="project-description">
        <li>
          This is an independent project I made to test my ability to access
          data from an API and display it to the user on a webpage.
        </li>
        <li>
          It was also a good opportunity to test my knowledge of{" "}
          React and Next.js, and how to store API keys securely using{" "}
          <strong>Next.js</strong> features.
        </li>
        <li>
          The project features detailed weather reports about the current and
          forecasted conditions from any location in Australia.
        </li>
      </ul>
    </div>
  );
}
