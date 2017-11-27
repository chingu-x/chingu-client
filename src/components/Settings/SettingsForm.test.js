import React from "react";
import { shallow } from "enzyme";

import { WrappedForm as SettingsForm } from "./SettingsForm";

describe("SettingsForm Component", () => {
  const props = {
    first_name: "Andrés",
    last_name: "Pérez",
    github_url: "https://github.com/Oxyrus"
  };

  it("renders without crashing", () => {
    const wrapper = shallow(<SettingsForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
