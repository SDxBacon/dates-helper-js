import { describe, expect, test } from "@jest/globals";
import {
  isToday as oldIsToday,
  isYesterday as oldIsYesterday,
  isThisWeek as oldIsThisWeek,
  isThisMonth as oldIsThisMonth,
  isThisQuarter as oldIsThisQuarter,
} from "../OriginDate.js";
import {
  isToday,
  isYesterday,
  isThisWeek,
  isThisMonth,
  isThisQuarter,
} from "../../src/index.js";
import CASES from "./cases";

function _test({ title, arg, m1, m2 }) {
  test(title, function () {
    expect(m1(...arg)).toEqual(m2(...arg));
  });
}

function sequence(arg) {
  _test({ title: "isToday.", arg, m1: oldIsToday, m2: isToday });
  _test({ title: "isYesterday.", arg, m1: oldIsYesterday, m2: isYesterday });
  _test({ title: "isThisWeek.", arg, m1: oldIsThisWeek, m2: isThisWeek });
  _test({ title: "isThisMonth.", arg, m1: oldIsThisMonth, m2: isThisMonth });
  _test({
    title: "isThisQuarter.",
    arg,
    m1: oldIsThisQuarter,
    m2: isThisQuarter,
  });
}

/**
 * entry
 */
describe("Testing `dates/duration/isDuration.js` methods.", function () {
  CASES.forEach(function ({ title, arg }) {
    describe(title, function () {
      sequence(arg);
    });
  });
});
