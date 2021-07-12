import React from "react";
import Header from "./Header/Header.js";
import Skills from "./Skills/Skills.js";

export default function Intro() {
  return (
    <div className="intro-container">
      <Header />
      <p className="intro-text">Hi! I'm Sophie, a full-stack web developer.</p>
      <Skills />
    </div>
  );
}
