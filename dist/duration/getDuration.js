"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastMonthFromNow = exports.getThisYear = exports.getThisQuarter = exports.getThisMonth = exports.getThisWeek = exports.getToday = exports.getYesterday = void 0;

var _getTime = _interopRequireDefault(require("date-fns/getTime"));

var _startOfWeek = _interopRequireDefault(require("date-fns/startOfWeek"));

var _startOfMonth = _interopRequireDefault(require("date-fns/startOfMonth"));

var _startOfQuarter = _interopRequireDefault(require("date-fns/startOfQuarter"));

var _startOfYear = _interopRequireDefault(require("date-fns/startOfYear"));

var _startOfYesterday = _interopRequireDefault(require("date-fns/startOfYesterday"));

var _endOfYesterday = _interopRequireDefault(require("date-fns/endOfYesterday"));

var _day = require("../day.js");

var _basic = require("../basic.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _getStartOfFnTime = fn => {
  return (0, _getTime.default)(fn(new Date()));
};
/**
 * @name getYesterday
 * @returns {Number[]} [ from, to ]
 * @description 取得昨日的startOfDay和endOfDay
 * - from: 昨日 00:00:00 的timestamp
 * - to: 昨日 23:59:59 的timestamp
 */


const getYesterday = () => [(0, _startOfYesterday.default)(), (0, _endOfYesterday.default)()].map(d => (0, _getTime.default)(d));
/**
 * @name getToday
 * @returns {Number[]} [ from, to ]
 * @description 取得今日的startOfDay和endOfDay
 * - from: 今日 00:00:00 的timestamp
 * - to: 今日 23:59:59 的timestamp
 */


exports.getYesterday = getYesterday;

const getToday = () => {
  return [(0, _day.startOfDay)(), (0, _day.endOfDay)()];
};
/**
 * @name getThisWeek
 * @returns {Number[]} [ from, to ]
 * @description 取得這個星期的startOfDay和當日endOfDay
 * - from: 這個星期第一天的 00:00:00 的timestamp
 * - to: 今日 23:59:59 的timestamp
 */


exports.getToday = getToday;

const getThisWeek = () => [_getStartOfFnTime(_startOfWeek.default), (0, _day.endOfDay)()];
/**
 * @name getThisMonth
 * @returns {Number[]} [ from, to ]
 * @description 取得這個月的startOfDay和當日endOfDay
 * - from: 這個月第一天的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */


exports.getThisWeek = getThisWeek;

const getThisMonth = () => [_getStartOfFnTime(_startOfMonth.default), (0, _day.endOfDay)()];
/**
 * @name getThisQuarter
 * @returns {Number[]} [ from, to ]
 * @description 取得這個季度的startOfDay和當日endOfDay
 * - from: 這個季度第一天的的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */


exports.getThisMonth = getThisMonth;

const getThisQuarter = () => [_getStartOfFnTime(_startOfQuarter.default), (0, _day.endOfDay)()];
/**
 * @name getThisYear
 * @returns {Number[]} [ from, to ]
 * @description 取得今年的startOfDay和當日endOfDay
 * - from: 今年第一天的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */


exports.getThisQuarter = getThisQuarter;

const getThisYear = () => [_getStartOfFnTime(_startOfYear.default), (0, _day.endOfDay)()];
/**
 * @name getLastMonthFromNow
 * @returns {Number[]} [ from, to ]
 * @description 取得距今上個月的startOfDay和當日endOfDay
 * - from: 距今上個月的 00:00:00 timestamp
 * - to: 今日 23:59:59 的timestamp
 */


exports.getThisYear = getThisYear;

const getLastMonthFromNow = () => {
  return [(0, _basic._getStartOfDayFromToday)('months', 1), (0, _day.endOfDay)()];
};

exports.getLastMonthFromNow = getLastMonthFromNow;
//# sourceMappingURL=getDuration.js.map