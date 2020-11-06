import { sub, isValid } from "date-fns";
import { startOfDay, endOfDay } from "./day.js";

/**
 * _parseTimeInput
 * @param {*} time
 * @returns {Number|Date}
 */
export const _parseTimeInput = (time) => {
  if (isValid(time)) {
    return time;
  }
  return new Date();
};

/**
 * _getStartOfDayFromToday
 * @param {*} unit
 * @param {*} factor
 */
export const _getStartOfDayFromToday = (unit, factor = 1) => {
  return startOfDay(
    sub(new Date(), {
      [unit]: factor,
    })
  );
};

/**
 * _isThis
 * @param {*} start
 * @param {*} end
 * @param {*} unit
 * @param {*} factor
 */
export const _isThis = (start, end, unit, factor) => {
  const from = _getStartOfDayFromToday(unit, factor);
  const to = endOfDay();
  return start === from && end === to;
};
