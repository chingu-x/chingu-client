import loginMutation from "./loginMutation";

describe("loginMutation", () => {
  it("should match the snapshot", () => {
    expect(loginMutation).toMatchSnapshot();
  });
});
