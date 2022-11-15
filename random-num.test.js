const randomInt = require("./random-num");

describe("Testing of random number", () => {
  const testCase = [
    {
      from: 50,
      to: 70,
    },
    {
      from: 200,
      to: 205,
    },
  ];
  testCase.forEach((test) => {
    it(`from num : ${test.from} to num : ${test.to}`, () => {
      const res = randomInt(test.from, test.to);
      expect(res).toBeGreaterThanOrEqual(test.from);
      expect(res).toBeLessThanOrEqual(test.to);
    });
  });
});
