import assert from "assert";
import {
  startOfDay as momentStartOfDay,
  endOfDay as momentEndOfDay,
} from "../OriginDate.js";
import { startOfDay, endOfDay } from "../dates/index.js";

/**
 * 測試 startOfDay和endOfDay
 */
export default function test_day() {
  describe("Testing dates/day.js methods, including `startOfDay` and `endOfDay`", function () {
    describe("Running function with no argument.", function () {
      it("startOfDay.", function () {
        assert.strictEqual(momentStartOfDay(), startOfDay());
      });
      it("endOfDay.", function () {
        assert.strictEqual(momentEndOfDay(), endOfDay());
      });
    });

    describe("Passing a Date object to function.", function () {
      const arg = new Date("2020", "4", "13");
      it("startOfDay.", function () {
        assert.strictEqual(momentStartOfDay(arg), startOfDay(arg));
      });
      it("endOfDay.", function () {
        assert.strictEqual(momentEndOfDay(arg), endOfDay(arg));
      });
    });

    describe("Passing a timestamp to function.", function () {
      const arg = new Date().getTime();
      it("startOfDay.", function () {
        assert.strictEqual(momentStartOfDay(arg), startOfDay(arg));
      });
      it("endOfDay.", function () {
        assert.strictEqual(momentEndOfDay(arg), endOfDay(arg));
      });
    });
  });
}
