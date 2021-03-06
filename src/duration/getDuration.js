import getTime from 'date-fns/getTime';
import startOfWeek from 'date-fns/startOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import startOfQuarter from 'date-fns/startOfQuarter';
import startOfYear from 'date-fns/startOfYear';
import startOfYesterday from 'date-fns/startOfYesterday';
import endOfYesterday from 'date-fns/endOfYesterday';

import { startOfDay, endOfDay } from '../day.js';
import { _getStartOfDayFromToday } from '../basic.js';

const _getStartOfFnTime = (fn) => {
  return getTime(fn(new Date()));
};

/**
 * @name getYesterday
 * @returns {Number[]} [ from, to ]
 * @description 取得昨日的startOfDay和endOfDay
 * - from: 昨日 00:00:00 的timestamp
 * - to: 昨日 23:59:59 的timestamp
 */
export const getYesterday = () =>
  [startOfYesterday(), endOfYesterday()].map((d) => getTime(d));

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
export const getThisWeek = () => [_getStartOfFnTime(startOfWeek), endOfDay()];

/**
 * @name getThisMonth
 * @returns {Number[]} [ from, to ]
 * @description 取得這個月的startOfDay和當日endOfDay
 * - from: 這個月第一天的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getThisMonth = () => [_getStartOfFnTime(startOfMonth), endOfDay()];

/**
 * @name getThisQuarter
 * @returns {Number[]} [ from, to ]
 * @description 取得這個季度的startOfDay和當日endOfDay
 * - from: 這個季度第一天的的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getThisQuarter = () => [
  _getStartOfFnTime(startOfQuarter),
  endOfDay(),
];

/**
 * @name getThisYear
 * @returns {Number[]} [ from, to ]
 * @description 取得今年的startOfDay和當日endOfDay
 * - from: 今年第一天的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getThisYear = () => [_getStartOfFnTime(startOfYear), endOfDay()];

/**
 * @name getLastMonthFromNow
 * @returns {Number[]} [ from, to ]
 * @description 取得距今上個月的startOfDay和當日endOfDay
 * - from: 距今上個月的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getLastMonthFromNow = () => {
  return [_getStartOfDayFromToday('months', 1), endOfDay()];
};
