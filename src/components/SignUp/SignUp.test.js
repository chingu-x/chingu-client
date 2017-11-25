import React from "react";
import { shallow } from "enzyme";

import SignUp from "./SignUp";

describe("SignUp Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toMatchSnapshot();
  });
});
