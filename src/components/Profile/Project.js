import React from "react";
import { Card } from "antd";

import "./Project.css";

const Project = props => (
  <Card>
    <div className="image">
      <img
        alt="example"
        width="100%"
        src={props.image_url}
      />
    </div>
    <div className="content">
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <ul>
        <li>
          {props.github_url ? (
            <a href={props.github_url}>Github</a>
          ) : (
            "No GitHub"
          )}
        </li>
        <li>
          {props.project_url ? (
            <a href={props.project_url}>Live</a>
          ) : (
            "No Project URL"
          )}
        </li>
      </ul>

      <strong>Team</strong>
      <ul>
        {props.users.map(user => {
          return <li key={user.username}>{user.username}</li>;
        })}
      </ul>
    </div>
  </Card>
);

export default Project;
