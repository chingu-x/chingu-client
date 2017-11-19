import React, { Component } from "react";

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
    console.log("The form was submitted");
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
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
