import React from "react";
import { shallow } from "enzyme";

import Project from "./Project";

describe("Project Component", () => {
  const props = {
    image_url: "https://lorempixel.com/nature/200/200",
    title: "Chingu Developers Network",
    description: "An amazing project",
    github_url: "https://github.com/chingu-x/chingu-client",
    users: [
      {
        username: "Oxyrus"
      },
      {
        username: "Vampiire"
      },
      {
        username: "TheSabby"
      }
    ]
  };
  it("renders without crashing", () => {
    const wrapper = shallow(<Project {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
