import React from "react";
import { shallow } from "enzyme";

import { wrappedForm as SignUpForm } from "./SignUpForm";

describe("SignUpForm Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SignUpForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
