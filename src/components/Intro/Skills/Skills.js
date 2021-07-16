import React from "react";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills: &#123;</h2>
      <div className="skills-box-mern">
        <span>[</span>
        <i className="devicon-mongodb-plain-wordmark colored"></i>
        <i className="devicon-express-original-wordmark colored"></i>
        <i className="devicon-react-original-wordmark colored"></i>
        <i className="devicon-nodejs-plain-wordmark colored"></i>
        <span>],</span>
      </div>
      <div className="skills-box-web">
        <span>[</span>
        <i className="devicon-html5-plain-wordmark colored"></i>
        <i className="devicon-css3-plain-wordmark colored"></i>
        <i className="devicon-sass-original colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-typescript-plain colored"></i>
        <span>],</span>
      </div>
      <div className="skills-box-organise">
        <span>[</span>
        <i className="devicon-git-plain-wordmark colored"></i>
        <i className="devicon-jest-plain colored"></i>
        <span>]</span>
        <span className="skills-container-closing-bracket">&#125;</span>
      </div>
    </div>
  );
}
