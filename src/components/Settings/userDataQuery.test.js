import userDataQuery from "./userDataQuery";

describe("userDataQuery", () => {
  it("should be the correct query", () => {
    expect(userDataQuery).toMatchSnapshot();
  });
});
