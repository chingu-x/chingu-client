import query from "./query";

it("should be the correct query", () => {
  expect(query).toMatchSnapshot();
});
