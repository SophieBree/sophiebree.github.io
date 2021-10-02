import React from "react";
import Bookshop from "./Bookshop/Bookshop.js";
import Google from "./Google/Google.js";
import StarWars from "./StarWars/StarWars.js";
import Weather from "./Weather/Weather.js";

export default function Projects() {
  return (
    <div id="projects-container">
      <h1 className="projects-container-title">Projects</h1>
      <Bookshop />
      <StarWars />
      <Weather />
      <Google />
    </div>
  );
}
