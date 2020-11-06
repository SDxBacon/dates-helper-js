import {
  sub,
  isValid,
  getTime,
  formatISO9075,
  startOfDay,
  endOfDay,
  startOfYesterday,
  endOfYesterday,
} from "date-fns";

const _parseTimeInput = (time) => {
  if (isValid(time)) {
    return time;
  }
  return new Date();
};

const _getStartOfDayFromToday = (unit, factor = 1) => {
  return _startOfDay(
    sub(new Date(), {
      [unit]: factor,
    })
  );
};

const _isThis = (start, end, unit, factor) => {
  const from = _getStartOfDayFromToday(unit, factor);
  const to = _endOfDay();
  return start === from && end === to;
};

export const DISPLAY_FORMAT = "YYYY/MM/DD";

/**
 * @name formatISO9075
 * @param {*} time
 * @return {string} strTime (yyyy-MM-dd HH:mm:ss)
 * @description 將時間轉換為ISO 9075 (yyyy-MM-dd HH:mm:ss)
 */
const _formatISO9075 = (time) => {
  const pTime = _parseTimeInput(time);
  return formatISO9075(pTime);
};
export { _formatISO9075 as formatISO9075 };

/**
 * @name startOfDay
 * @param {Date|number} time
 * @return {number} timestamp
 * @description 取得輸入的時間`time`的00:00:00的timestamp，若`time`無法轉換為Date格式，則輸出的時間會以
 *              執行函式當日00:00:00的timestamp
 */
const _startOfDay = (time) => {
  const pTime = _parseTimeInput(time);
  return getTime(startOfDay(pTime));
};
export { _startOfDay as startOfDay };

/**
 * @name endOfDay
 * @param {Date|number} time
 * @return {number} timestamp
 * @description 取得輸入的時間`time`的23:59:59的timestamp，若`time`無法轉換為Date格式，則輸出的時間會以
 *              執行函式當日23:59:59的timestamp
 */
const _endOfDay = (time) => {
  const pTime = _parseTimeInput(time);
  return getTime(endOfDay(pTime));
};
export { _endOfDay as endOfDay };

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
  return start === _startOfDay() && end === _endOfDay();
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

/**
 * @name getYesterday
 * @returns {Number[]} [ from, to ]
 * @description 取得昨日的startOfDay和endOfDay
 * - from: 昨日 00:00:00 的timestamp
 * - to: 昨日 23:59:59 的timestamp
 */
export const getYesterday = () => [startOfYesterday(), endOfYesterday()];

/**
 * @name getToday
 * @returns {Number[]} [ from, to ]
 * @description 取得今日的startOfDay和endOfDay
 * - from: 今日 00:00:00 的timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getToday = () => {
  return [_startOfDay(), _endOfDay()];
};

/**
 * @name getThisWeek
 * @returns {Number[]} [ from, to ]
 * @description 取得距今一週前的startOfDay和當日endOfDay
 * - from: 距今一週前的 00:00:00 的timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getThisWeek = () => [
  _getStartOfDayFromToday("weeks", 1),
  _endOfDay(),
];

/**
 * @name getThisMonth
 * @returns {Number[]} [ from, to ]
 * @description 取得距今一個月前的startOfDay和當日endOfDay
 * - from: 距今一個月前的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getThisMonth = () => [
  _getStartOfDayFromToday("months", 1),
  _endOfDay(),
];

/**
 * @name getThisQuarter
 * @returns {Number[]} [ from, to ]
 * @description 取得距今一個季度前的startOfDay和當日endOfDay
 * - from: 距今一個季度前的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getThisQuarter = () => _getRangeDateFromToday("months", 3);

/**
 * @name getLastMonthFromNow
 * @returns {Number[]} [ from, to ]
 * @description 取得距今上個月的startOfDay和當日endOfDay
 * - from: 距今上個月的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */
export const getLastMonthFromNow = () => {
  const lastMonth = sub(new Date(), { months: 1 });
  return [_startOfDay(lastMonth), endOfDay()];
};
