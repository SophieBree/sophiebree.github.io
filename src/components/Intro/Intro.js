import React from "react";
import Header from "./Header/Header.js";
import Skills from "./Skills/Skills.js";

export default function Intro() {
  return (
    <div className="intro-container">
      <Header />

      <p className="intro-header">Hi! I'm Sophie, a full-stack web developer.</p>
      <div className="intro-contact">
        <a href="https://github.com/SophieBree">
          {" "}
          <i className="devicon-github-original-wordmark colored"></i>
        </a>
        <a href="https://www.linkedin.com/in/sophie-lewis-3a520b217/">
        <i className="devicon-linkedin-plain"></i>
        </a>
        <a href="https://www.twitter.com/sophiebclewis">
        <i className="devicon-twitter-original colored"></i>
        </a>
      </div>
      <p className="intro-text">I'm a junior developer who enjoys the challenge of creating things with code to improve people's lives.</p>
      <Skills />
    </div>
  );
}
