import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Step from "./Step";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <section className="section green accent-3 white-text text-darken-4">
          <div className="container">
            <h1 className="header center">Chingu Cohorts</h1>
            <div className="row center">
              <h5 className="header col s12 light">
                Building amazing projects, gain real experience
              </h5>
            </div>
            <div className="row center">
              <Link
                to="/"
                className="btn waves-effect waves-light light-blue accent-3"
              >
                Apply
              </Link>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="section">
            <div className="row">

              <Step
                icon="face"
                title="Individuals"
                description="We believe in learning by building real projects, when you apply to Chingu, this is just the beginning of the adventure."
              />

              <Step
                icon="group"
                title="Teams"
                description="Once you're accepted into Chingu, you'll be paired with people at your same skill level and a more advanced project manager."
              />

              <Step
                icon="flag"
                title="Projects"
                description="As a team, you'll decide on your project, and will have a span of two months to complete and ship it. This is what we call, build to learn."
              />

            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default LandingPage;
