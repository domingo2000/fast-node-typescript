import { sum } from ".";

describe("sum", () => {
  test("should sum", () => {
    expect(sum(2, 3)).toBe(5);
    console.log("hello");
  });
});
