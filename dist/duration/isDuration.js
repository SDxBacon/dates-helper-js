"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isThisQuarter = exports.isThisMonth = exports.isThisWeek = exports.isToday = exports.isYesterday = void 0;

var _basic = require("../basic.js");

var _getDuration = require("./getDuration.js");

var _day = require("../day.js");

/**
 * @name isYesterday
 * @param {number} start - timestamp (in milliseconds)
 * @param {number} end - timestamp (in milliseconds)
 * @description 判斷輸入的`start`和`end`是否為startOfYesterday, endOfYesterday
 */
const isYesterday = (start, end) => {
  const [from, to] = (0, _getDuration.getYesterday)();
  return start === from && end === to;
};
/**
 * @name isToday
 * @param {number} start - timestamp (in milliseconds)
 * @param {number} end - timestamp (in milliseconds)
 * @description 判斷輸入的`start`和`end`是否為startOfToday, endOfToday
 */


exports.isYesterday = isYesterday;

const isToday = (start, end) => {
  return start === (0, _day.startOfDay)() && end === (0, _day.endOfDay)();
};
/**
 * @name isThisWeek
 * @param {number} start - timestamp (in milliseconds)
 * @param {number} end - timestamp (in milliseconds)
 * @description 判斷輸入的`start`是否為 startOfWeek, 且`end`是否為endOfToday
 */


exports.isToday = isToday;

const isThisWeek = (start, end) => (0, _basic._isThis)(start, end, "weeks");
/**
 * @name isThisMonth
 * @param {number} start - timestamp (in milliseconds)
 * @param {number} end - timestamp (in milliseconds)
 * @description 判斷輸入的`start`是否為 startOfMonth, 且`end`是否為endOfToday
 */


exports.isThisWeek = isThisWeek;

const isThisMonth = (start, end) => (0, _basic._isThis)(start, end, "months");
/**
 * @name isThisQuarter
 * @param {number} start - timestamp (in milliseconds)
 * @param {number} end - timestamp (in milliseconds)
 * @description 判斷輸入的`start`是否為startOfQuarter, 且`end`是否為endOfToday
 */


exports.isThisMonth = isThisMonth;

const isThisQuarter = (start, end) => (0, _basic._isThis)(start, end, "months", 3);

exports.isThisQuarter = isThisQuarter;
//# sourceMappingURL=isDuration.js.map