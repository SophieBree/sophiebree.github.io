import React from "react";
import Header from "./Header/Header.js";
import Skills from "./Skills/Skills.js";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="container">
      <Header />
      <p>Hi! I'm Sophie, a full-stack web developer.</p>
      <Skills />
    </div>
  );
}
