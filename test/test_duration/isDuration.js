import assert from "assert";
import {
  isToday as oldIsToday,
  isYesterday as oldIsYesterday,
  isThisWeek as oldIsThisWeek,
  isThisMonth as oldIsThisMonth,
  isThisQuarter as oldIsThisQuarter,
} from "../../OriginDate.js";
import {
  isToday,
  isYesterday,
  isThisWeek,
  isThisMonth,
  isThisQuarter,
  startOfDay,
  endOfDay,
} from "../../dates/index.js";

/**
 * TODO: add test cases
 */
const cases = [
  {
    title: "Passing `undefined` to function.",
    arg: [startOfDay(), endOfDay()],
  },
];

function testSequence(arg) {
  it("isToday.", function () {
    assert.strictEqual(oldIsToday(...arg), isToday(...arg));
  });

  it("isYesterday.", function () {
    assert.strictEqual(oldIsYesterday(...arg), isYesterday(...arg));
  });

  it("isThisWeek.", function () {
    assert.strictEqual(oldIsThisWeek(...arg), isThisWeek(...arg));
  });

  it("isThisMonth.", function () {
    assert.strictEqual(oldIsThisMonth(...arg), isThisMonth(...arg));
  });

  it("isThisQuarter.", function () {
    assert.strictEqual(oldIsThisQuarter(...arg), isThisQuarter(...arg));
  });
}

export default function test_is_duration() {
  describe("Testing `dates/duration/isDuration.js` methods.", function () {
    cases.forEach(function ({ title, arg }) {
      describe(title, function () {
        testSequence(arg);
      });
    });
  });
}
