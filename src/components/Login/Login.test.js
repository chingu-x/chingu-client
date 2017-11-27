import React from "react";
import { shallow } from "enzyme";

import Login from "./Login";

describe("Login Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
