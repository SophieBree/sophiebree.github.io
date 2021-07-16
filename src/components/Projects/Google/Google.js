import React from "react";
import google from "./google.png";

export default function Google() {
  return (
    <div className="project-container-single">
        <div className="project-title-container">
          <h2 className="project-title">Google Homepage Replica</h2>
          <div className="project-links">
            <a href="https://github.com/SophieBree/google-homepage">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://lucid-rosalind-de5613.netlify.app/">
              <i className="devicon-firefox-plain"></i>
            </a>
          </div>
        </div>
        <a href="https://lucid-rosalind-de5613.netlify.app/">
          <img
            className="project-image"
            src={google}
            alt="Homepage of my Google homepage replica."
          />
        </a>
      <ul className="project-description">
        <li>
          I made this as part of the Odin Project to learn more about{" "}
          <strong>HTML</strong> and
          <strong> CSS.</strong>
        </li>
        <li>
          This was a fun project which also demonstrates my ability to pull a
          design from a template and implement it myself.
        </li>
      </ul>
    </div>
  );
}
