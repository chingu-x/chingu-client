import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Project from "./Project";
import Cohort from "./Cohort";
import "./Profile.css";

class Profile extends Component {
  componentWillMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    let { loading, error, user } = this.props.data;
    if (loading) {
      return (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      );
    } else if (error) {
      return <h1>An error ocurred</h1>;
    } else if (!user) {
      return <h1>User not found</h1>;
    }

    return (
      <div className="container">
        {/* Header */}
        <div className="header grey lighten-4">
          <div className="row">
            <div className="col m3 s12">
              <img src="http://lorempixel.com/200/200/abstract/" alt="Avatar" />
              <p className="grey-text center">
                {user.country ? user.country.name : "No location provided"}
              </p>
            </div>
            <div className="col m9 s12">
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                congue mattis velit nec elementum. Maecenas ut justo ac velit
                placerat lacinia eu ac orci. Etiam nec ex sit amet augue.
              </p>
            </div>
          </div>
        </div>
        {/* End Header */}

        <div className="row">
          {/* Projects */}
          <div className="col s12 m8">
            <h4>Projects</h4>

            <div className="row">
              {user.projects ? (
                user.projects.map(project => <Project />)
              ) : (
                <h6>The user has no projects yet</h6>
              )}

              <Project
                name="Chingu Developers Network"
                description="The state of the art when it comes to developer collaboration, allowing hundreds of people from all over the world to connect with each other."
              />

              <Project
                name="Chingu Developers Network"
                description="The state of the art when it comes to developer collaboration, allowing hundreds of people from all over the world to connect with each other."
              />
            </div>
          </div>
          {/* End Projects */}

          {/* Skills & Cohorts */}
          <div className="col s12 m3 offset-m1">
            {/* Cohorts */}
            <div>
              <h4>Cohorts</h4>

              <div className="row">
                {user.cohorts ? (
                  user.cohorts.map(cohort => <Cohort />)
                ) : (
                  <h6>User hasn't been member of any cohorts</h6>
                )}
                <Cohort
                  name="Voyage 2"
                  members="320"
                  countries="59"
                  projects="70"
                />
                <Cohort
                  name="Voyage 2"
                  members="320"
                  countries="59"
                  projects="70"
                />
              </div>
              <p className="center">
                <i className="material-icons small">arrow_drop_down_circle</i>
              </p>
            </div>
            {/* End Cohorts */}
          </div>
          {/* End Skills & Cohorts */}
        </div>
      </div>
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
