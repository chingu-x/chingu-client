import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Layout, Row, Col, Spin } from "antd";

import userDataQuery from "./userDataQuery";
import SettingsForm from "./SettingsForm";
import "./Settings.css";

const { Content } = Layout;

export class Settings extends Component {
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
    }
    return (
      <Content>
        <div className="settings">
          <h1 className="text-center">Update your settings and profile</h1>
          <Row type="flex" justify="center">
            <Col sm={22} md={18} lg={16}>
              <SettingsForm {...user} />
            </Col>
          </Row>
        </div>
      </Content>
    );
  }
}

export default graphql(userDataQuery)(Settings);
