import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Row, Col, Layout, Spin } from "antd";

import Project from "./Project";
import Cohort from "./Cohort";
import "./Profile.css";

const { Content } = Layout;

class Profile extends Component {
  render() {
    let { loading, error, user } = this.props.data;
    if (loading) {
      return (
        <Content>
          <div className="spinner">
            <Spin />
          </div>
        </Content>
      );
    } else if (error) {
      return (
        <Content>
          <h1>An error ocurred</h1>
        </Content>
      );
    } else if (!user) {
      return (
        <Content>
          <h1>User not found</h1>
        </Content>
      );
    }

    return (
      <Content>
        <div className="section header" style={{ marginTop: "3rem" }}>
          <Row type="flex" justify="center">
            <Col sm={24} md={8} lg={6}>
              <img
                src="https://avatars2.githubusercontent.com/u/25523682?s=460&v=4"
                alt="Avatar"
              />
              <p className="text-center">United States</p>
            </Col>
            <Col sm={24} md={16} lg={18}>
              <h2>
                {user.first_name} {user.last_name}
              </h2>
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
              <p className="bio">
                {user.bio ? user.bio : "User has no bio yet"}
              </p>
            </Col>
          </Row>
        </div>

        <div className="section profile-content">
          <Row type="flex" justify="center" gutter={16}>
            <Col sm={24} md={16}>
              <h3>Projects</h3>
              <Row type="flex" gutter={16}>
                <Col md={12}>
                  <Project
                    title="AutoBot"
                    image_url="https://i.imgur.com/xI6mzlh.png?1"
                    description="Tool to automatically monitor and moderate Chingu Voyages in parallel"
                    github_url="https://github.com/chingu-x/AutoBot"
                    users={[{ username: "Daniel Segovia" }]}
                  />
                </Col>
                <Col md={12}>
                  <Project
                    title="ChinguChimp"
                    image_url="https://camo.githubusercontent.com/221467b6cd3432144757a1527aee2403a55dbc49/68747470733a2f2f692e696d6775722e636f6d2f465730725746692e706e67"
                    description="Profile bot to handle updating, viewing and sharing Chingu user profiles"
                    github_url="https://github.com/chingu-x/ChinguChimp"
                    users={[{ username: "Daniel Segovia" }]}
                  />
                </Col>
              </Row>
            </Col>
            <Col sm={24} md={8}>
              <h3>Cohorts</h3>
              <Row type="flex" gutter={16}>
                <Cohort name="Voyage 2" members="243" />
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
    );
  }
}

const userQuery = gql`
  query userProfile($userId: ID!) {
    user(user_id: $userId) {
      first_name
      last_name
      github_url
      twitter_url
      projects {
        title
        description
        github_url
        project_url
        users {
          username
        }
      }
      cohorts {
        users {
          username
        }
      }
    }
  }
`;

export default graphql(userQuery, {
  options: ownProps => ({
    variables: {
      userId: ownProps.match.params.id
    }
  })
})(Profile);
