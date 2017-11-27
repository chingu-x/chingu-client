import React from "react";

import "./Cohort.css";

const Cohort = props => (
  <div className="cohort">
    <h4 className="cohort-name">{props.title}</h4>
    <p className="cohort-details">{props.users.length} Members, {props.teams.length} Teams</p>
  </div>
);

export default Cohort;
