import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Form, Icon, Input, Button } from "antd";

import registerUser from "./registerUserMutation";
import "./SignUpForm.css";

const FormItem = Form.Item;

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      userName: ""
    };
  }

  handleSignUp = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        let { email, first_name, last_name, github_url, password, userName } = values;

        this.props
          .mutate({
            variables: {
              email,
              first_name,
              last_name,
              github_url,
              password,
              userName,
            }
          })
          .then(({ data }) => {
            window.localStorage.setItem("token", data.createUser.jwt);
            window.location = "/profile/" + data.createUser.user.id;
          })
          .catch(err => {
            console.error(err);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSignUp} className="signup-form">
        <FormItem>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              prefix={<Icon type="global" style={{ fontSize: 13 }} />}
              type="email"
              placeholder="Email"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("username", {
            rules: [
              { required: true, message: "Please input your username!" }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              type="text"
              placeholder="User Name"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("first_name", {
            rules: [
              { required: true, message: "Please input your first name!" }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              type="text"
              placeholder="First name"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("last_name", {
            rules: [{ required: true, message: "Please input your last name!" }]
          })(
            <Input
              prefix={<Icon type="team" style={{ fontSize: 13 }} />}
              type="text"
              placeholder="Last name"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("github_url", {
            rules: [
              { required: true, message: "Please input your GitHub URL!" }
            ]
          })(
            <Input
              prefix={<Icon type="github" style={{ fontSize: 13 }} />}
              type="text"
              placeholder="GitHub URL"
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
          {getFieldDecorator("passwordVerify", {
            rules: [{ required: true, message: "Please verify your password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Verify Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="signup-form-button"
          >
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export const wrappedForm = Form.create()(SignUpForm);

export default graphql(registerUser)(wrappedForm);