"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.endOfDay = exports.startOfDay = void 0;

var _basic = require("./basic.js");

var _getTime = _interopRequireDefault(require("date-fns/getTime"));

var _endOfDay2 = _interopRequireDefault(require("date-fns/endOfDay"));

var _startOfDay2 = _interopRequireDefault(require("date-fns/startOfDay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name startOfDay
 * @param {Date|number} time
 * @return {number} timestamp
 * @description 取得輸入的時間`time`的00:00:00的timestamp，若`time`無法轉換為Date格式，則輸出的時間會以
 *              執行函式當日00:00:00的timestamp
 */
const _startOfDay = time => {
  const pTime = (0, _basic._parseTimeInput)(time);
  return (0, _getTime.default)((0, _startOfDay2.default)(pTime));
};

exports.startOfDay = _startOfDay;

/**
 * @name endOfDay
 * @param {Date|number} time
 * @return {number} timestamp
 * @description 取得輸入的時間`time`的23:59:59的timestamp，若`time`無法轉換為Date格式，則輸出的時間會以
 *              執行函式當日23:59:59的timestamp
 */
const _endOfDay = time => {
  const pTime = (0, _basic._parseTimeInput)(time);
  return (0, _getTime.default)((0, _endOfDay2.default)(pTime));
};

exports.endOfDay = _endOfDay;

/**
 * default export
 */
const DayModule = {
  startOfDay: _startOfDay,
  endOfDay: _endOfDay
};
var _default = DayModule;
exports.default = _default;
//# sourceMappingURL=day.js.map