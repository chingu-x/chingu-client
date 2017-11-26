import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Form, Tabs, Input, Button } from "antd";

import updateUserMutation from "./updateUserMutation";

const { TabPane } = Tabs;
const FormItem = Form.Item;

class SettingsForm extends Component {
  componentDidMount() {
    let {
      first_name,
      last_name,
      bio,
      github_url,
      twitter_url,
      linkedin_url,
      portfolio_url,
      website_url,
      blog_url
    } = this.props;

    this.props.form.setFieldsValue({
      first_name,
      last_name,
      bio,
      github_url,
      twitter_url,
      linkedin_url,
      portfolio_url,
      website_url,
      blog_url
    });
  }

  handleProfileSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        let {
          first_name,
          last_name,
          bio,
          github_url,
          twitter_url,
          linkedin_url,
          portfolio_url,
          website_url,
          blog_url
        } = values;

        console.log(values);

        this.props
          .mutate({
            variables: {
              first_name: first_name,
              last_name: last_name,
              bio: bio,
              github_url: github_url,
              twitter_url: twitter_url,
              linkedin_url: linkedin_url,
              portfolio_url: portfolio_url,
              website_url: website_url,
              blog_url: blog_url
            }
          })
          .then(({ data }) => {
            console.log(data);
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
      <Tabs defaultActiveKey="1" tabPosition="left">
        <TabPane tab="Profile" key="1">
          <Form onSubmit={this.handleProfileSubmit}>
            <FormItem
              label="First name"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
            >
              {getFieldDecorator("first_name", {
                rules: [
                  {
                    required: true,
                    message: "Please enter your first name"
                  }
                ]
              })(<Input placeholder="First name" />)}
            </FormItem>
            <FormItem
              label="Last name"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
            >
              {getFieldDecorator("last_name", {
                rules: [
                  {
                    required: true,
                    message: "Please enter your last name"
                  }
                ]
              })(<Input placeholder="Last name" />)}
            </FormItem>
            <FormItem
              label="Bio"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
            >
              {getFieldDecorator("bio")(<Input.TextArea rows={4} />)}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                Update profile
              </Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane tab="Networks" key="2">
          <Form onSubmit={this.handleProfileSubmit}>
            <FormItem
              label="GitHub"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
            >
              {getFieldDecorator("github_url", {
                rules: [
                  {
                    required: true,
                    message: "Please enter your GitHub URL"
                  }
                ]
              })(<Input placeholder="https://github.com/chingu-x" />)}
            </FormItem>
            <FormItem
              label="Twitter"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
            >
              {getFieldDecorator("twitter_url")(
                <Input placeholder="https://twitter.com/Chingu-collabs" />
              )}
            </FormItem>
            <FormItem
              label="LinkedIn"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
            >
              {getFieldDecorator("linkedin_url")(
                <Input placeholder="https://linkedin.com/chingu" />
              )}
            </FormItem>
            <FormItem
              label="Portfolio"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
            >
              {getFieldDecorator("portfolio_url")(
                <Input placeholder="https://portfolio.com" />
              )}
            </FormItem>
            <FormItem
              label="Website"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
            >
              {getFieldDecorator("website_url")(
                <Input placeholder="https://chingu.io" />
              )}
            </FormItem>
            <FormItem
              label="Blog"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 10 }}
            >
              {getFieldDecorator("blog_url")(
                <Input placeholder="https://medium.com/chingu" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                Update profile
              </Button>
            </FormItem>
          </Form>
        </TabPane>
      </Tabs>
    );
  }
}

export const WrappedForm = Form.create()(SettingsForm);

export default graphql(updateUserMutation)(WrappedForm);
