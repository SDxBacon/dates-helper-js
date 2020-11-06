import { _isThis } from "../basic.js";
import { getYesterday } from "./getDuration.js";
import { startOfDay, endOfDay } from "../day.js";

/**
 * @name isYesterday
 * @param {number} start - timestamp (in milliseconds)
 * @param {number} end - timestamp (in milliseconds)
 * @description 判斷輸入的`start`和`end`是否為startOfYesterday, endOfYesterday
 */
export const isYesterday = (start, end) => {
  const [from, to] = getYesterday();
  return start === from && end === to;
};

/**
 * @name isToday
 * @param {number} start - timestamp (in milliseconds)
 * @param {number} end - timestamp (in milliseconds)
 * @description 判斷輸入的`start`和`end`是否為startOfToday, endOfToday
 */
export const isToday = (start, end) => {
  return start === startOfDay() && end === endOfDay();
};

/**
 * @name isThisWeek
 * @param {number} start - timestamp (in milliseconds)
 * @param {number} end - timestamp (in milliseconds)
 * @description 判斷輸入的`start`是否為 startOfWeek, 且`end`是否為endOfToday
 */
export const isThisWeek = (start, end) => _isThis(start, end, "weeks");

/**
 * @name isThisMonth
 * @param {number} start - timestamp (in milliseconds)
 * @param {number} end - timestamp (in milliseconds)
 * @description 判斷輸入的`start`是否為 startOfMonth, 且`end`是否為endOfToday
 */
export const isThisMonth = (start, end) => _isThis(start, end, "months");

/**
 * @name isThisQuarter
 * @param {number} start - timestamp (in milliseconds)
 * @param {number} end - timestamp (in milliseconds)
 * @description 判斷輸入的`start`是否為startOfQuarter, 且`end`是否為endOfToday
 */
export const isThisQuarter = (start, end) => _isThis(start, end, "months", 3);
