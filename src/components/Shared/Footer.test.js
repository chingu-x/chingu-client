import React from "react";
import { shallow } from "enzyme";

import Footer from "./MainFooter";

describe("Footer Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
