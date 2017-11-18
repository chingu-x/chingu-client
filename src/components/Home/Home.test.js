import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LandingPage from "./LandingPage";

// Configure Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe("LandingPage component", () => {
  it("Contains a h1 wrapper with a message", () => {
    const wrapper = shallow(<LandingPage />);
    const message = <h1>Hello from the home component</h1>;
    expect(wrapper.contains(message)).toEqual(true);
  });
});
