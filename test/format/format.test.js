import { describe, expect, test } from "@jest/globals";
import {
  toDisplayFormat,
  DISPLAY_FORMAT as ORIGIN_DISPLAY_FORMAT,
} from "../../OriginDate.js";
import { formatISO9075, DISPLAY_FORMAT } from "../../dates/index.js";
import CASES from "./cases";

describe("Testing dates/format.js constants and methods.", function () {
  /**
   * Constant matcher
   */
  describe("Constants.", function () {
    test("DISPLAY_FORMAT ", function () {
      expect(ORIGIN_DISPLAY_FORMAT).toEqual(DISPLAY_FORMAT);
    });
  });

  /**
   * Methods
   */
  describe("Method - formatISO9075 ", function () {
    /**
     * cases
     */
    CASES.forEach(({ title, arg }) => {
      test(title, function () {
        expect(toDisplayFormat(arg)).toEqual(formatISO9075(arg));
      });
    });
  });
});
