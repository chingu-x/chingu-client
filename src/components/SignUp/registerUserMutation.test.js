import registerUserMutation from "./registerUserMutation";

describe("registerUserMutation", () => {
  it("should be the correct mutation", () => {
    expect(registerUserMutation).toMatchSnapshot();
  });
});
