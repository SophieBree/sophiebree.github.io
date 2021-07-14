import React from "react";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills: &#123;</h2>
      <div className="skills-box-mern">
        <span>[</span>
        <i className="devicon-mongodb-plain-wordmark"></i>
        <i className="devicon-express-original-wordmark colored"></i>
        <i className="devicon-react-original-wordmark"></i>
        <i className="devicon-nodejs-plain-wordmark"></i>
        <span>],</span>
      </div>
      <div className="skills-box-web">
        <span>[</span>
        <i className="devicon-html5-plain-wordmark"></i>
        <i className="devicon-css3-plain-wordmark"></i>
        <i className="devicon-sass-original"></i>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-typescript-plain"></i>
        <span>],</span>
      </div>
      <div className="skills-box-organise">
        <span>[</span>
        <i className="devicon-git-plain-wordmark"></i>
        <i className="devicon-jest-plain"></i>
        <span>]</span>
        <span className="skills-container-closing-bracket">&#125;</span>
      </div>
    </div>
  );
}
