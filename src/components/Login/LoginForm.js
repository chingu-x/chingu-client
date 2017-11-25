import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Form, Icon, Input, Button, Spin } from "antd";

import loginMutation from "./loginMutation";
import "./LoginForm.css";

const FormItem = Form.Item;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }

  handleLogin = e => {
    e.preventDefault();

    this.setState({
      loading: true
    });

    this.props.form.validateFields((err, values) => {
      if (!err) {
        let { email, password } = values;
        this.props
          .mutate({
            variables: {
              email,
              password
            }
          })
          .then(({ data }) => {
            window.localStorage.setItem("token", data.signInUser.jwt);
            this.setState({
              loading: false
            });
            window.location = "/profile/" + data.signInUser.user.id;
          })
          .catch(err => {
            console.error(err);
          });
      }
    });

    this.setState({
      loading: false
    });
  };

  spinner() {
    if (this.state.loading) {
      return <Spin size="large" />;
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleLogin} className="login-form">
        <FormItem>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              type="email"
              placeholder="Email"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </FormItem>
        {this.spinner()}
      </Form>
    );
  }
}

export const wrappedForm = Form.create()(LoginForm);

export default graphql(loginMutation)(wrappedForm);
