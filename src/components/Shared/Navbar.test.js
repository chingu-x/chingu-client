import React from "react";
import { shallow } from "enzyme";

import { Navbar } from "./Navbar";

describe("Navbar Component", () => {
  it("renders with text in case the component is loading", () => {
    const props = {
      data: {
        loading: true,
        user: null
      }
    };
    const wrapper = shallow(<Navbar {...props} />);
    const message = <h1>Loading</h1>;
    expect(wrapper.contains(message)).toEqual(true);
  });

  it("renders without crashing", () => {
    const props = {
      data: {
        loading: false,
        user: {
          id: 1
        }
      }
    };
    const wrapper = shallow(<Navbar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
