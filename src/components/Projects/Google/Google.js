import React from "react";
import google from "./google.png";

export default function Google() {
  return (
    <div>
      <div className="project-container-single google">
        <h2 className="project-title">Google Homepage Replica</h2>
        <a href="https://lucid-rosalind-de5613.netlify.app/">
          <img className="project-image" src={google} alt="" />
        </a>
      </div>
      <ul>
        <li>Made using HTML and CSS</li>
        <li>
          It is a replica of the Google homepage, demonstrating ability to pull
          a design from a template and implement it myself.
        </li>
      </ul>
    </div>
  );
}
