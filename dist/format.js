"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DISPLAY_FORMAT = exports.formatISO9075 = void 0;

var _basic = require("./basic.js");

var _formatISO = _interopRequireDefault(require("date-fns/formatISO9075"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name formatISO9075
 * @param {*} time
 * @return {string} strTime (yyyy-MM-dd HH:mm:ss)
 * @description 將時間轉換為ISO 9075 (yyyy-MM-dd HH:mm:ss)
 */
const _formatISO9075 = time => {
  const pTime = (0, _basic._parseTimeInput)(time);
  return (0, _formatISO.default)(pTime);
};

exports.formatISO9075 = _formatISO9075;

/** */
const DISPLAY_FORMAT = 'YYYY/MM/DD';
exports.DISPLAY_FORMAT = DISPLAY_FORMAT;
//# sourceMappingURL=format.js.map