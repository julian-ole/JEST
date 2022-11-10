//const { default: test } = require("node:test");

const sum = require("./sum");

test("properly adds two numbers", () => {
  expect(sum(1, 3)).toBe(4);
  expect(sum(1, -3)).not.toBe(5);
  expect(sum(1, 3)).not.toBe("G");
});
