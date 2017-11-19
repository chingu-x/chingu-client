import React from "react";

const Form = props => (
  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row center">
        <a className="waves-effect waves-light light-blue accent-3 btn">
          Login
        </a>
      </div>
    </form>
  </div>
);

export default Form;
