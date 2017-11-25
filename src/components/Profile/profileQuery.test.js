import profileQuery from "./profileQuery";

it("should be the correct query", () => {
  expect(profileQuery).toMatchSnapshot();
});
