const sum = require("./sum");

describe("Набортестов", () => {
  const testCase = [
    {
      makeSum: [2, 2],
      expected: 4,
    },
    {
      makeSum: [5, 2],
      expected: 7,
    },
    {
      makeSum: [4, 3],
      expected: 7,
    },
  ];
  testCase.forEach((test) => {
    it(`сумма чисел : ${test.makeSum} ожидаю: ${test.expected}`, () => {
      const result = sum(test.makeSum[0], test.makeSum[1]);
      expect(result).toEqual(test.expected);
    });
  });
});
