import React from "react";

import "./Project.css";

const Project = props => (
  <div className="col s12 grey lighten-4 project">
    <div className="row">
      <div className="col s12 m4">
        <img
          src="https://lorempixel.com/400/400/nature/"
          alt="Project thumbnail"
        />
      </div>
      <div className="col s12 m8">
        <h5>{props.name}</h5>
        <ul>
          <li>
            <a href="#!">Live</a>
          </li>
          <li>
            <a href="#!">GitHub</a>
          </li>
        </ul>
        <p>{props.description}</p>
        <p>
          <strong>Team:</strong> <a href="#!">Oxyrus</a>{" "}
          <a href="#!">Vampiire</a>
        </p>
      </div>
    </div>
  </div>
);

export default Project;
