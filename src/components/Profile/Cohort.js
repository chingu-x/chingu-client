import React from "react";

import "./Cohort.css";

const Cohort = props => (
  <div className="cohort">
    <h4 className="cohort-name">{props.name}</h4>
    <p className="cohort-details">{props.members} Members</p>
  </div>
);

export default Cohort;
