"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "startOfDay", {
  enumerable: true,
  get: function () {
    return _day.startOfDay;
  }
});
Object.defineProperty(exports, "endOfDay", {
  enumerable: true,
  get: function () {
    return _day.endOfDay;
  }
});
Object.defineProperty(exports, "formatISO9075", {
  enumerable: true,
  get: function () {
    return _format.formatISO9075;
  }
});
Object.defineProperty(exports, "DISPLAY_FORMAT", {
  enumerable: true,
  get: function () {
    return _format.DISPLAY_FORMAT;
  }
});
Object.defineProperty(exports, "getYesterday", {
  enumerable: true,
  get: function () {
    return _getDuration.getYesterday;
  }
});
Object.defineProperty(exports, "getToday", {
  enumerable: true,
  get: function () {
    return _getDuration.getToday;
  }
});
Object.defineProperty(exports, "getThisWeek", {
  enumerable: true,
  get: function () {
    return _getDuration.getThisWeek;
  }
});
Object.defineProperty(exports, "getThisMonth", {
  enumerable: true,
  get: function () {
    return _getDuration.getThisMonth;
  }
});
Object.defineProperty(exports, "getThisQuarter", {
  enumerable: true,
  get: function () {
    return _getDuration.getThisQuarter;
  }
});
Object.defineProperty(exports, "getThisYear", {
  enumerable: true,
  get: function () {
    return _getDuration.getThisYear;
  }
});
Object.defineProperty(exports, "getLastMonthFromNow", {
  enumerable: true,
  get: function () {
    return _getDuration.getLastMonthFromNow;
  }
});
Object.defineProperty(exports, "isToday", {
  enumerable: true,
  get: function () {
    return _isDuration.isToday;
  }
});
Object.defineProperty(exports, "isThisWeek", {
  enumerable: true,
  get: function () {
    return _isDuration.isThisWeek;
  }
});
Object.defineProperty(exports, "isThisMonth", {
  enumerable: true,
  get: function () {
    return _isDuration.isThisMonth;
  }
});
Object.defineProperty(exports, "isThisQuarter", {
  enumerable: true,
  get: function () {
    return _isDuration.isThisQuarter;
  }
});
Object.defineProperty(exports, "isYesterday", {
  enumerable: true,
  get: function () {
    return _isDuration.isYesterday;
  }
});
exports.default = void 0;

var _day = require("./day.js");

var _format = require("./format.js");

var _getDuration = require("./duration/getDuration.js");

var _isDuration = require("./duration/isDuration.js");

/** exporting day module */

/** exporting format module */

/** exporting duration/getDuration */

/** exporting duration/isDuration */

/** default export */
var _default = {
  // day module
  startOfDay: _day.startOfDay,
  endOfDay: _day.endOfDay,
  // format module
  formatISO9075: _format.formatISO9075,
  DISPLAY_FORMAT: _format.DISPLAY_FORMAT,
  // duration/getDuration
  getYesterday: _getDuration.getYesterday,
  getToday: _getDuration.getToday,
  getThisWeek: _getDuration.getThisWeek,
  getThisMonth: _getDuration.getThisMonth,
  getThisQuarter: _getDuration.getThisQuarter,
  getThisYear: _getDuration.getThisYear,
  getLastMonthFromNow: _getDuration.getLastMonthFromNow,
  // duration/isDuration
  isToday: _isDuration.isToday,
  isThisWeek: _isDuration.isThisWeek,
  isThisMonth: _isDuration.isThisMonth,
  isThisQuarter: _isDuration.isThisQuarter,
  isYesterday: _isDuration.isYesterday
};
exports.default = _default;
//# sourceMappingURL=index.js.map