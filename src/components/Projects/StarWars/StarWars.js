import React from "react";
import starwars from "./starwars.png";

export default function StarWars() {
  return (
    <div className="project-container-single">
      <div className="project-title-container">
        <h2 className="project-title">Star Wars Film Database</h2>
        <div className="project-links">
          <a href="https://github.com/SophieBree/star-wars-film-database">
            <i className="devicon-github-original"></i>
          </a>
          <a href="https://star-wars-film-database.vercel.app/">
            <i className="devicon-firefox-plain"></i>
          </a>
        </div>
      </div>
      <a href="https://star-wars-film-database.vercel.app/">
        <img
          className="project-image"
          src={starwars}
          alt="Homepage of my Star Wars Film Database website."
        />
      </a>

      <ul className="project-description">
        <li>
          This was part of a coding test to demonstrate my skills with{" "}
          <strong>React</strong>, <strong>NextJS</strong>, and the Star Wars API
          (SWAPI).
        </li>
        <li>
          It has a list of films pulled from SWAPI, an automated filter search
          bar, and each film can be favourited/unfavourited which is saved in
          localStorage.
        </li>
        <li>
          Each film has its own page, with details pulled from the API, as well
          as a list of characters, with images.
        </li>
      </ul>
    </div>
  );
}
