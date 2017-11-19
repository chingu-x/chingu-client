import React, { Component } from "react";

import Project from "./Project";
import Badge from "./Badge";
import Cohort from "./Cohort";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="container">
        {/* Header */}
        <div className="header grey lighten-4">
          <div className="row">
            <div className="col m3 s12">
              <img src="http://lorempixel.com/200/200/abstract/" alt="Avatar" />
              <p className="grey-text center">Amman, Jordan</p>
            </div>
            <div className="col m9 s12">
              <h2>Musaab Bakhiet</h2>
              <ul>
                <li>
                  <a href="#!">GitHub</a>
                </li>
                <li>
                  <a href="#!">Twitter</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                congue mattis velit nec elementum. Maecenas ut justo ac velit
                placerat lacinia eu ac orci. Etiam nec ex sit amet augue.
              </p>
            </div>
          </div>
        </div>
        {/* End Header */}

        <div className="row">
          {/* Projects */}
          <div className="col s12 m8">
            <h4>Projects</h4>

            <div className="row">
              <Project
                name="Chingu Developers Network"
                description="The state of the art when it comes to developer collaboration, allowing hundreds of people from all over the world to connect with each other."
              />

              <Project
                name="Chingu Developers Network"
                description="The state of the art when it comes to developer collaboration, allowing hundreds of people from all over the world to connect with each other."
              />
            </div>
          </div>
          {/* End Projects */}

          {/* Skills & Cohorts */}
          <div className="col s12 m3 offset-m1">
            {/* Skills */}
            <div>
              <h4>Skills</h4>

              <div className="row">
                <Badge name="Node" />
                <Badge name="Polymer" />
                <Badge name="GraphQL" />
              </div>
            </div>
            {/* End Skills */}

            {/* Cohorts */}
            <div>
              <h4>Cohorts</h4>

              <div className="row">
                <Cohort
                  name="Voyage 2"
                  members="320"
                  countries="59"
                  projects="70"
                />
                <Cohort
                  name="Voyage 2"
                  members="320"
                  countries="59"
                  projects="70"
                />
              </div>
              <p className="center">
                <i className="material-icons small">arrow_drop_down_circle</i>
              </p>
            </div>
            {/* End Cohorts */}
          </div>
          {/* End Skills & Cohorts */}
        </div>
      </div>
    );
  }
}

export default Profile;
