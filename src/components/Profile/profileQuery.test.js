import profileQuery from "./profileQuery";

describe("profileQuery", () => {
  it("should be the correct query", () => {
    expect(profileQuery).toMatchSnapshot();
  });
});
