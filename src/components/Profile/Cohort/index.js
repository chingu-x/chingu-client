import React from "react";

import "./Cohort.css";

const Cohort = props => (
  <div className="col s12 m12 grey lighten-4 cohort">
    <h5>{props.name}</h5>
    <p className="grey-text lighten-1">
      {props.members} Members, {props.countries} Countries, {props.projects}{" "}
      Projects
    </p>
  </div>
);

export default Cohort;
