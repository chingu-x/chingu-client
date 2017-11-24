import React, { Component } from "react";
import { Layout, Steps, Icon, Row, Col } from "antd";

import "./Home.css";

const { Content } = Layout;
const Step = Steps.Step;

class Home extends Component {
  render() {
    return (
      <div>
        <Content style={{ margin: "60px 0" }}>
          <Row type="flex" justify="center">
            <Col sm={20} md={16} lg={12}>
              <img className="chingu-logo" src="/img/chingu.png" alt="Chingu" />
              <h1 className="subtitle">
                Chingu facilitates global collaboration on projects in a
                structure focused on improving skills
              </h1>
            </Col>
          </Row>
        </Content>

        <Content style={{ padding: "0 50px" }}>
          <Row type="flex" justify="center">
            <Col sm={24} md={20} lg={16}>
              <Steps className="horizontal-steps">
                <Step
                  status="finish"
                  title="Apply"
                  icon={<Icon type="user" />}
                  description="Your adventure starts the moment you decide to join Chingu."
                />
                <Step
                  status="finish"
                  title="Join a team"
                  icon={<Icon type="team" />}
                  description="Get placed in a team of Chingus eager to learn."
                />
                <Step
                  status="finish"
                  title="Build projects"
                  icon={<Icon type="layout" />}
                  description="Decide on a project you believe, and build it."
                />
                <Step
                  status="process"
                  title="Succeed"
                  icon={<Icon type="smile-o" />}
                  description="Get a job, keep applying or do both."
                />
              </Steps>

              <Steps direction="vertical" className="vertical-steps">
                <Step
                  status="finish"
                  title="Apply"
                  icon={<Icon type="user" />}
                  description="Your adventure starts the moment you decide to join Chingu."
                />
                <Step
                  status="finish"
                  title="Join a team"
                  icon={<Icon type="team" />}
                  description="Get placed in a team of Chingus eager to learn."
                />
                <Step
                  status="finish"
                  title="Build projects"
                  icon={<Icon type="layout" />}
                  description="Decide on a project you believe, and build it."
                />
                <Step
                  status="process"
                  title="Succeed"
                  icon={<Icon type="smile-o" />}
                  description="Get a job, keep applying or do both."
                />
              </Steps>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default Home;
