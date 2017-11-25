import updateUserMutation from "./updateUserMutation";

describe("updateUserMutation", () => {
  it("should be the correct mutation", () => {
    expect(updateUserMutation).toMatchSnapshot();
  });
});
