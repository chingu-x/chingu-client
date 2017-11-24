import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import { Profile } from "./Profile";

describe("Profile component", () => {
  it("renders without crashing", () => {
    const props = {
      match: {
        params: {
          id: 1
        }
      }
    };
    const data = {
      user: {
        first_name: "Andrés",
        last_name: "Pérez",
        github_url: "https://github.com",
        projects: [],
        cohorts: []
      }
    };

    const wrapper = shallow(<Profile {...props} data={data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
