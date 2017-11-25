import React from "react";
import { shallow } from "enzyme";

import { wrappedForm as LoginForm } from "./LoginForm";

describe("LoginForm Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
