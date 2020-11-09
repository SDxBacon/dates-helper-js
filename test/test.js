import assert from "assert";
import { startOfDay as oldStartOfDay } from "../OriginDate.js";
import { startOfDay as NewStartOfDay } from "../NewDate.js";

describe("startOfDay", function () {
  describe("startOfDay()", function () {
    it("The result of startOfDay() with NO argument given.", function () {
      assert.strictEqual(oldStartOfDay(), NewStartOfDay());
    });

    it("The result of startOfDay() with a Date object.", function () {
      const someday = new Date("2020", "4", "13");
      assert.strictEqual(oldStartOfDay(someday), NewStartOfDay(someday));
    });

    it("The result of startOfDay() with a timestamp given.", function () {
      const timestamp = new Date();
      assert.strictEqual(oldStartOfDay(timestamp), NewStartOfDay(timestamp));
    });
  });
});
