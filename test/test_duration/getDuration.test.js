import assert from "assert";
import {
  getToday as oldGetToday,
  getYesterday as oldGetYesterday,
  getThisWeek as oldGetThisWeek,
  getThisMonth as oldGetThisMonth,
  getThisQuarter as oldGetThisQuarter,
} from "../../OriginDate.js";
import {
  getToday,
  getYesterday,
  getThisWeek,
  getThisMonth,
  getThisQuarter,
} from "../../dates/index.js";

/**
 * TODO: add test cases
 */
const cases = [
  {
    title: "Passing `undefined` to function.",
    arg: undefined,
  },
];

function asserter([oldFrom, oldTo], [from, to]) {
  assert.strictEqual(oldFrom, from);
  assert.strictEqual(oldTo, to);
}

function testSequence(arg) {
  it("getToday.", function () {
    asserter(oldGetToday(arg), getToday(arg));
  });

  it("getYesterday.", function () {
    asserter(oldGetYesterday(arg), getYesterday(arg));
  });

  it("getThisWeek.", function () {
    asserter(oldGetThisWeek(arg), getThisWeek(arg));
  });

  it("getThisMonth.", function () {
    asserter(oldGetThisMonth(arg), getThisMonth(arg));
  });

  it("getThisQuarter.", function () {
    asserter(oldGetThisQuarter(arg), getThisQuarter(arg));
  });
}

describe("Testing `dates/duration/getDuration.js` methods.", function () {
  cases.forEach(function ({ title, arg }) {
    describe(title, function () {
      testSequence(arg);
    });
  });
});
