import React from "react";
import { Card } from "antd";

import "./Project.css";

const Project = props => (
  <Card>
    <div className="image">
      <img
        alt="example"
        width="100%"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    </div>
    <div className="content">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>
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
      </p>
      <p>
        <strong>Team</strong>
        <ul>
          {props.users.map(user => {
            return <li>{user.username}</li>;
          })}
        </ul>
      </p>
    </div>
  </Card>
);

export default Project;
