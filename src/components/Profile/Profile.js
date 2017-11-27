import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Row, Col, Layout, Spin } from "antd";

import Project from "./Project";
import Cohort from "./Cohort";
import profileQuery from "./profileQuery";
import "./Profile.css";

const { Content } = Layout;

export class Profile extends Component {
  render() {
    let { loading, error, user } = this.props.data;
    if (loading) {
      return (
        <Content>
          <div className="text-center">
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
                src={`https://api.adorable.io/avatars/250/${user.email}.png`}
                alt="Avatar"
              />
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
                ) : null}

                {user.twitter_url ? (
                  <li>
                    <a href={user.twitter_url}>Twitter</a>
                  </li>
                ) : null}

                {user.blog_url ? (
                  <li>
                    <a href={user.blog_url}>Blog</a>
                  </li>
                ) : null}
              </ul>
              <p className="bio">
                {user.bio ? user.bio : "User does not have a bio yet."}
              </p>
            </Col>
          </Row>
        </div>

        <div className="section profile-content">
          <Row type="flex" justify="center" gutter={16}>
            <Col sm={24} md={16}>
              <h3>Projects</h3>
              <Row type="flex" gutter={16}>
                {user.projects.length > 0
                  ? user.projects.map((project, index) => {
                      return (
                        <Col md={12}>
                          <Project {...project} key={index} />
                        </Col>
                      );
                    })
                  : "User doesn't have any projects."}
              </Row>
            </Col>
            <Col sm={24} md={8}>
              <h3>Cohorts</h3>
              <Row type="flex" gutter={16}>
                {user.cohorts.length > 0
                  ? user.cohorts.map((cohort, index) => {
                      return <Cohort {...cohort} />;
                    })
                  : "User hasn't been part of any cohorts."}
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
    );
  }
}

export default graphql(profileQuery, {
  options: ownProps => ({
    variables: {
      userId: ownProps.match.params.id
    }
  })
})(Profile);
