import React from "react";

const Step = props => (
  <div className="col s12 m4">
    <div className="icon-block">
      <h2 className="center light-blue-text">
        <i className="material-icons">{props.icon}</i>
      </h2>
      <h5 className="center">{props.title}</h5>
      <p className="light">{props.description}</p>
    </div>
  </div>
);

export default Step;
