import { describe, expect, test } from "@jest/globals";
import {
  startOfDay as momentStartOfDay,
  endOfDay as momentEndOfDay,
} from "../../OriginDate.js";
import { startOfDay, endOfDay } from "../../dates/index.js";
import CASES from "./cases";

/**
 * 測試 startOfDay和endOfDay
 */
describe("Testing dates/day.js methods, including `startOfDay` and `endOfDay`", function () {
  /**
   * passing `null` to function, which the original startOfDay will return `NaN`
   */
  describe("Passing `null` to function.", function () {
    const start = new Date().setHours(0, 0, 0, 0);
    const end = new Date().setHours(23, 59, 59, 999);
    test("startOfDay.", function () {
      expect(startOfDay(null)).toEqual(start);
    });
    test("endOfDay.", function () {
      expect(endOfDay(null)).toEqual(end);
    });
  });
  /**
   *
   */
  CASES.forEach(({ title, arg }) => {
    describe(title, function () {
      test("startOfDay.", function () {
        const valOld = momentStartOfDay(arg);
        const valNew = startOfDay(arg);
        expect(valOld).toEqual(valNew);
      });
      test("endOfDay.", function () {
        const valOld = momentEndOfDay(arg);
        const valNew = endOfDay(arg);
        expect(valOld).toEqual(valNew);
      });
    });
  });
});
