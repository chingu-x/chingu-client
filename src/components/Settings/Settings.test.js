import React from "react";
import { shallow } from "enzyme";

import { Settings } from "./Settings";

describe("Settings Component", () => {
  const props = {
    data: {
      loading: false,
      error: false,
      user: {
        first_name: "Andrés",
        last_name: "Pérez"
      }
    }
  };
  it("renders without crashing", () => {
    const wrapper = shallow(<Settings {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
