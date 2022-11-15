const filterArray = require("./filter-array.js");

describe("фильтруем массив", () => {
  const testCase = [
    {
      defaultArr: [0, 1, 2, 3, 4],
      expected: [0, 2, 4],
    },
    {
      defaultArr: [true, false, true, false, true, false],
      expected: [true, true, true],
    },
  ];

  testCase.forEach((test) => {
    it(`перебрать массив : ${test.defaultArr} ожидаю : ${test.expected}`, () => {
      const res = filterArray(test.defaultArr);
      expect(res).toEqual(test.expected);
    });
  });
});
