import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin(e) {
    e.preventDefault();

    this.props
      .mutate({
        variables: {
          email: this.state.email,
          password: this.state.password
        }
      })
      .then(({ data }) => {
        window.localStorage.setItem("user_id", data.signInUser.user.id);
        window.localStorage.setItem("token", data.signInUser.jwt);
        window.location = "/profile/" + data.signInUser.user.id;
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={e => this.handleLogin(e)} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <label className="active" htmlFor="email">
                Email
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
              <label className="active" htmlFor="password">
                Password
              </label>
            </div>
          </div>
          <div className="row center">
            <button
              type="submit"
              className="waves-effect waves-light light-blue accent-3 btn"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const loginMutation = gql`
  mutation userLogin($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      user {
        id
      }
      jwt
    }
  }
`;

export default graphql(loginMutation)(Form);
