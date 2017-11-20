import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const MainFooter = props => (
  <Layout style={{ marginTop: "60px" }}>
    <Footer style={{ textAlign: "center" }}>
      Made by <a href="https://github.com/chingu-x">Chingu X</a>
    </Footer>
  </Layout>
);

export default MainFooter;
