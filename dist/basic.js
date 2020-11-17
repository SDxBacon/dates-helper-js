"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._isThis = exports._getStartOfDayFromToday = exports._parseTimeInput = void 0;

var _sub = _interopRequireDefault(require("date-fns/sub"));

var _isValid = _interopRequireDefault(require("date-fns/isValid"));

var _day = require("./day.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * _parseTimeInput
 * @param {*} time
 * @returns {Number|Date}
 */
const _parseTimeInput = time => {
  if ((0, _isValid.default)(time)) {
    return time;
  }

  return new Date();
};
/**
 * _getStartOfDayFromToday
 * @param {*} unit
 * @param {*} factor
 */


exports._parseTimeInput = _parseTimeInput;

const _getStartOfDayFromToday = (unit, factor = 1) => {
  return (0, _day.startOfDay)((0, _sub.default)(new Date(), {
    [unit]: factor
  }));
};
/**
 * _isThis
 * @param {*} start
 * @param {*} end
 * @param {*} unit
 * @param {*} factor
 */


exports._getStartOfDayFromToday = _getStartOfDayFromToday;

const _isThis = (start, end, unit, factor) => {
  const from = _getStartOfDayFromToday(unit, factor);

  const to = (0, _day.endOfDay)();
  return start === from && end === to;
};

exports._isThis = _isThis;
//# sourceMappingURL=basic.js.map