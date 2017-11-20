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
        <div className="section header" style={{ marginTop: "4rem" }}>
          <Row type="flex" justify="center">
            <Col sm={24} md={8} lg={6}>
              <img src="http://lorempixel.com/200/200/abstract/" alt="Avatar" />
              <p className="text-center">
                {user.country ? user.country.name : "No location provided"}
              </p>
            </Col>
            <Col sm={24} md={16} lg={18}>
              <h2>
                {user.first_name} {user.last_name}
              </h2>
              <ul>
                {user.github_url ? (
                  <li>
                    <a href={user.github_url}>GitHub</a>
                  </li>
                ) : (
                  <li>N/A</li>
                )}
                {user.twitter_url ? (
                  <li>
                    <a href="#!">Twitter</a>
                  </li>
                ) : (
                  <li>No Twitter</li>
                )}
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
              {user.projects ? (
                user.projects.map(project => {
                  return <Project {...project} />;
                })
              ) : (
                <p>User doesn't have any projects yet.</p>
              )}
            </Col>
            <Col sm={24} md={8}>
              <h3>Cohorts</h3>
              {user.cohorts ? (
                user.cohorts.map(cohort => {
                  return <Cohort {...cohort} />;
                })
              ) : (
                <p>User hasn't been part of any cohorts yet.</p>
              )}
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
