import React from "react";
import { shallow } from "enzyme";

import Cohort from "./Cohort";

describe("Cohort Component", () => {
  const props = {
    name: "Voyage X",
    members: 1000
  };

  it("renders without crashing", () => {
    const wrapper = shallow(<Cohort {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("has a cohort class", () => {
    const wrapper = shallow(<Cohort {...props} />);
    expect(wrapper.hasClass("cohort")).toEqual(true);
  });

  it("contains an h4 with class cohort-name", () => {
    const wrapper = shallow(<Cohort {...props} />);
    expect(wrapper.find("h4.cohort-name")).toHaveLength(1);
  });

  it("contains a p with class cohort-details", () => {
    const wrapper = shallow(<Cohort {...props} />);
    expect(wrapper.find("p.cohort-details")).toHaveLength(1);
  });
});
