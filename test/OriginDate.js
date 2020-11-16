import moment from 'moment';

export const DISPLAY_FORMAT = 'YYYY/MM/DD';

export const toDisplayFormat = (time) =>
  moment(time).format('YYYY-MM-DD HH:mm:ss');

export const startOfDay = (time) => moment(time).startOf('day').valueOf();

export const endOfDay = (time) => moment(time).endOf('day').valueOf();

const _getRangeDateByUnitFromNow = (unit = 'day') => {
  const from = moment().subtract(1, unit).startOf('day').valueOf();
  const to = endOfDay();
  return [from, to];
};

const _getRangeDateFromToday = (unit = 'day') => {
  const from = moment().startOf(unit).valueOf();
  const to = endOfDay(); // get today's 23:59:59 timestamp
  return [from, to];
};

const _isThis = (start, end, unit) => {
  const [from, to] = _getRangeDateFromToday(unit);
  return start === from && end === to;
};

/**
 * 判斷start & end 是否符合「本日」、「本季」、「本月」或「本季」
 * @param {number} start - timestamp (in milliseconds)
 * @param {number} end - timestamp (in milliseconds)
 */
export const isYesterday = (start, end) => {
  const [from, to] = getYesterday();
  return start === from && end === to;
};

export const isToday = (start, end) => _isThis(start, end);

export const isThisWeek = (start, end) => _isThis(start, end, 'week');

export const isThisMonth = (start, end) => _isThis(start, end, 'month');

export const isThisQuarter = (start, end) => _isThis(start, end, 'quarter');

/**
 * 取得「本日」、「本季」、「本月」或「本季」的timestamp值
 *
 * @returns {[number, number]} [ from, to ] - timestamp時間範圍
 *                                from - 起始日的00:00:00 (start of day)的timestamp (in milliseconds)
 *                                to   - 終止日的23:59:59 (end of day)的timestamp (in milliseconds)
 */
export const getYesterday = () => {
  const mYesterday = moment().subtract(1, 'day');
  return [
    mYesterday.startOf('day').valueOf(),
    mYesterday.endOf('day').valueOf(),
  ];
};

export const getToday = () => _getRangeDateFromToday();

export const getThisWeek = () => _getRangeDateFromToday('week');

export const getThisMonth = () => _getRangeDateFromToday('month');

export const getThisQuarter = () => _getRangeDateFromToday('quarter');

export const getThisYear = () => _getRangeDateFromToday('year');

export const getLastMonthFromNow = () => _getRangeDateByUnitFromNow('month');
