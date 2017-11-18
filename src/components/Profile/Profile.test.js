import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Profile from "./Profile";

// Configure Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe("Profile component", () => {
  it("Contains a h1 wrapper with a message", () => {
    const wrapper = shallow(<Profile />);
    const message = <h1>Hello from the profile component</h1>;
    expect(wrapper.contains(message)).toEqual(true);
  });
});
