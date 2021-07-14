import React from "react";
import bookshop from "./bookshop.png";

export default function Bookshop() {
  return (
    <div className="project-container-single">
      <div className="bookshop">
        <div className="project-title-container">
          <h2 className="project-title">Local Bookshop Inventory</h2>
          <a href="https://github.com/SophieBree/inventory-app">
            <i className="devicon-github-original"></i>
          </a>
          <a href="https://mysterious-plateau-96484.herokuapp.com/">
            <i className="devicon-firefox-plain"></i>
          </a>
        </div>

        <a href="https://mysterious-plateau-96484.herokuapp.com/">
          <img
            className="bookshop-project-image project-image"
            src={bookshop}
            alt="Homepage of my local bookshop inventory app."
          />
        </a>
      </div>
      <ul className="project-description">
        <li>I made this as part of the Odin Project to learn about <strong>server-side development</strong>, using <strong>MongoDB, Express, Node.js, and Pug.</strong></li>
        <li>I decided to expand on the original project by adding user authentication and authorisation with <strong>PassportJS.</strong></li>
        <li>The users' passwords are also hashed using <strong>bcryptjs.</strong></li>
        <li>Hosted on Heroku</li>
        <li>
          This project can also be thought of as a demonstration of my technical
          progression since creating the 'Basic Library' project.
        </li>
      </ul>
    </div>
  );
}
