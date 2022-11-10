const subtract = require("./subtract");

test("properly subtracting two numbers", () => {
  expect(subtract(3, 2)).toBe(1);
});
