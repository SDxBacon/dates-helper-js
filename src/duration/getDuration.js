import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

import { startOfDay, endOfDay } from '../day.js';
// import { _getStartOfDayFromToday } from '../basic.js';

export const getRangeDateFromToday = (unit = 'day') => {
  dayjs.extend(quarterOfYear);
  const from = dayjs().startOf(unit).valueOf();
  const to = endOfDay(); // get today's 23:59:59 timestamp
  return [from, to];
};

const _getRangeDateByUnitFromNow = (unit = 'day') => {
  const from = dayjs().subtract(1, unit).startOf('day').valueOf();
  const to = endOfDay();
  return [from, to];
};

/**
 * @name getYesterday
 * @returns {Number[]} [ from, to ]
 * @description 取得昨日的startOfDay和endOfDay
 * - from: 昨日 00:00:00 的timestamp
 * - to: 昨日 23:59:59 的timestamp
 */
export const getYesterday = () => {
  const mYesterday = dayjs().subtract(1, 'day');
  return [
    mYesterday.startOf('day').valueOf(),
    mYesterday.endOf('day').valueOf(),
  ];
};

/**
 * @name getToday
 * @returns {Number[]} [ from, to ]
 * @description 取得今日的startOfDay和endOfDay
 * - from: 今日 00:00:00 的timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getToday = () => {
  return [startOfDay(), endOfDay()];
};

/**
 * @name getThisWeek
 * @returns {Number[]} [ from, to ]
 * @description 取得這個星期的startOfDay和當日endOfDay
 * - from: 這個星期第一天的 00:00:00 的timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getThisWeek = () => getRangeDateFromToday('week');

/**
 * @name getThisMonth
 * @returns {Number[]} [ from, to ]
 * @description 取得這個月的startOfDay和當日endOfDay
 * - from: 這個月第一天的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getThisMonth = () => getRangeDateFromToday('month');

/**
 * @name getThisQuarter
 * @returns {Number[]} [ from, to ]
 * @description 取得這個季度的startOfDay和當日endOfDay
 * - from: 這個季度第一天的的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getThisQuarter = () => {
  return getRangeDateFromToday('quarter');
};

/**
 * @name getThisYear
 * @returns {Number[]} [ from, to ]
 * @description 取得今年的startOfDay和當日endOfDay
 * - from: 今年第一天的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getThisYear = () => getRangeDateFromToday('year');

/**
 * @name getLastMonthFromNow
 * @returns {Number[]} [ from, to ]
 * @description 取得距今上個月的startOfDay和當日endOfDay
 * - from: 距今上個月的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getLastMonthFromNow = () => _getRangeDateByUnitFromNow('month');
