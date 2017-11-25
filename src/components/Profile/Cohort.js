import React from "react";

import "./Cohort.css";

const Cohort = props => (
  <div className="cohort">
    <h4>{props.name}</h4>
    <p>
      {props.members} Members
    </p>
  </div>
);

export default Cohort;
