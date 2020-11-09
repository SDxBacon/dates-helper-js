import assert from "assert";
import {
  toDisplayFormat,
  DISPLAY_FORMAT as ORIGIN_DISPLAY_FORMAT,
} from "../OriginDate.js";
import { formatISO9075, DISPLAY_FORMAT } from "../dates/index.js";

describe("Testing dates/format.js constants and methods.", function () {
  describe("Constants.", function () {
    it("DISPLAY_FORMAT ", function () {
      assert.strictEqual(ORIGIN_DISPLAY_FORMAT, DISPLAY_FORMAT);
    });
  });

  describe("Method - formatISO9075 ", function () {
    it("Passing `undefined` to function.", function () {
      assert.strictEqual(toDisplayFormat(), formatISO9075());
    });

    it("Passing timestamp (1604679265909) to function.", function () {
      const arg = 1604679265909;
      assert.strictEqual(toDisplayFormat(arg), formatISO9075(arg));
    });

    it("Passing a Date object (new Date('2020', '4', '13')) to function.", function () {
      const arg = new Date("2020", "4", "13");
      assert.strictEqual(toDisplayFormat(arg), formatISO9075(arg));
    });
  });
});
