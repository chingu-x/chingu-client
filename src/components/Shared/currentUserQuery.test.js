import currentUserQuery from "./currentUserQuery";

it("should be the correct query", () => {
  expect(currentUserQuery).toMatchSnapshot();
});
