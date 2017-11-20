import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props
      .mutate({
        variables: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password
        }
      })
      .then(({ data }) => {
        console.log(data);
        window.location = "/";
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={e => this.handleSubmit(e)} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="first_name"
                type="text"
                className="validate"
                value={this.state.first_name}
                onChange={e => this.setState({ first_name: e.target.value })}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="last_name"
                type="text"
                className="validate"
                value={this.state.last_name}
                onChange={e => this.setState({ last_name: e.target.value })}
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <label htmlFor="email">Email</label>
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
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row center">
            <button
              type="submit"
              className="waves-effect waves-light light-blue accent-3 btn"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const registerUser = gql`
  mutation registerUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      user_data: {
        email: $email
        first_name: $first_name
        last_name: $last_name
        github_url: "https://github.com/Oxyrus"
      }
      password: $password
    ) {
      email
    }
  }
`;

export default graphql(registerUser)(Form);
