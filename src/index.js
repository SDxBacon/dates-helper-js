/** exporting day module */
import { startOfDay, endOfDay } from "./day.js";
export { startOfDay, endOfDay };

/** exporting format module */
import { formatISO9075, DISPLAY_FORMAT } from "./format.js";
export { formatISO9075, DISPLAY_FORMAT };

/** exporting duration/getDuration */
import {
  getYesterday,
  getToday,
  getThisWeek,
  getThisMonth,
  getThisQuarter,
  getThisYear,
  getLastMonthFromNow,
} from "./duration/getDuration.js";
export {
  getYesterday,
  getToday,
  getThisWeek,
  getThisMonth,
  getThisQuarter,
  getThisYear,
  getLastMonthFromNow,
};

/** exporting duration/isDuration */
import {
  isToday,
  isThisWeek,
  isThisMonth,
  isThisQuarter,
  isYesterday,
} from "./duration/isDuration.js";
export { isToday, isThisWeek, isThisMonth, isThisQuarter, isYesterday };

/** default export */
export default {
  // day module
  startOfDay,
  endOfDay,
  // format module
  formatISO9075,
  DISPLAY_FORMAT,
  // duration/getDuration
  getYesterday,
  getToday,
  getThisWeek,
  getThisMonth,
  getThisQuarter,
  getThisYear,
  getLastMonthFromNow,
  // duration/isDuration
  isToday,
  isThisWeek,
  isThisMonth,
  isThisQuarter,
  isYesterday,
};
