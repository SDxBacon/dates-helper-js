import { describe, expect, test } from "@jest/globals";
import {
  getToday as oldGetToday,
  getYesterday as oldGetYesterday,
  getThisWeek as oldGetThisWeek,
  getThisMonth as oldGetThisMonth,
  getThisQuarter as oldGetThisQuarter,
  getThisYear as oldGetThisYear,
} from "./OriginDate.js";
import {
  getToday,
  getYesterday,
  getThisWeek,
  getThisMonth,
  getThisQuarter,
  getThisYear,
} from "../src/index.js";

/**
 * getDuration 測項：相對應的舊與新method輸出結果相符即可
 */
describe("Testing `dates/duration/getDuration.js` methods.", function () {
  /** getToday */
  test("getToday", function () {
    expect(oldGetToday()).toEqual(getToday());
  });

  /** getYesterday */
  test("getYesterday", function () {
    expect(oldGetYesterday()).toEqual(getYesterday());
  });

  /** getThisWeek */
  test("getThisWeek", function () {
    expect(oldGetThisWeek()).toEqual(getThisWeek());
  });

  /** getThisMonth */
  test("getThisMonth", function () {
    expect(oldGetThisMonth()).toEqual(getThisMonth());
  });

  /** getThisQuarter */
  test("getThisQuarter", function () {
    expect(oldGetThisQuarter()).toEqual(getThisQuarter());
  });

  /** getThisYear */
  test("getThisYear", function () {
    expect(oldGetThisYear()).toEqual(getThisYear());
  });
});
