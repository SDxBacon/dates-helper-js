import dayjs from 'dayjs';
import { getRangeDateFromToday } from './duration/getDuration';

/**
 * _parseTimeInput
 * @param {*} time
 * @returns {Number|Date}
 */
export const _parseTimeInput = (time) => {
  if (dayjs(time).isValid()) {
    return time;
  }
  return new Date();
};

/**
 * _isThis
 * @param {*} start
 * @param {*} end
 * @param {*} unit
 * @param {*} factor
 */
export const _isThis = (start, end, unit, factor) => {
  const [from, to] = getRangeDateFromToday(unit);
  return start === from && end === to;
};
