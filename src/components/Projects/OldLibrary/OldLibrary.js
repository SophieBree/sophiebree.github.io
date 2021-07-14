import React from "react";
import oldlibrary from "./oldlibrary.png";

export default function OldLibrary() {
  return (
    <div className="project-container-single">
      <div className="old-library">
        <div className="project-title-container">
          <h2 className="project-title">Front-end Library App</h2>
          <a href="https://github.com/SophieBree/library">
            <i className="devicon-github-original"></i>
          </a>
          <a href="https://compassionate-swirles-1c0039.netlify.app/">
            <i className="devicon-firefox-plain"></i>
          </a>
        </div>
        <a href="https://compassionate-swirles-1c0039.netlify.app/">
          <img className="project-image" src={oldlibrary} alt="Homepage of my front-end library app." />
        </a>
      </div>
      <ul className="project-description">
        <li>
          This was an independent project to test my skills in{" "}
          <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
          <strong>JavaScript.</strong>
        </li>
        <li>
          It is a basic library app that allows users to add books, pin them,
          and mark them as read.
        </li>
        <li>
          I tested my JavaScript knowledge by adding a button to toggle the book
          view between list and grid.
        </li>
        <li>
          The app also saves the books, as well as their read/pinned status in
          localStorage.
        </li>
      </ul>
    </div>
  );
}
