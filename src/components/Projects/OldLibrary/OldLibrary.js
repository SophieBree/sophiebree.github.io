import React from "react";
import oldlibrary from "./oldlibrary.png";

export default function OldLibrary() {
  return (
    <div>
      <div className="project-container-single old-library">
        <h2 className="project-title">Basic Library App</h2>
        <a href="https://compassionate-swirles-1c0039.netlify.app/">
          <img className="project-image" src={oldlibrary} alt="" />
        </a>
      </div>
      <ul>
        <li>Made using HTML, CSS, and JS</li>
        <li>
          A basic library app that allows users to add books, pin them, and mark
          them as read
        </li>
        <li>Features ability to switch views between grid and list</li>
      </ul>
    </div>
  );
}
