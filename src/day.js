import { _parseTimeInput } from './basic.js';
import dayjs from 'dayjs';

/**
 * @name startOfDay
 * @param {Date|number} time
 * @return {number} timestamp
 * @description 取得輸入的時間`time`的00:00:00的timestamp，若`time`無法轉換為Date格式，則輸出的時間會以
 *              執行函式當日00:00:00的timestamp
 */
const _startOfDay = (time) => {
  const pTime = _parseTimeInput(time);
  return dayjs(pTime).startOf('day').valueOf();
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
  return dayjs(pTime).endOf('day').valueOf();
};
export { _endOfDay as endOfDay };

/**
 * default export
 */
const DayModule = {
  startOfDay: _startOfDay,
  endOfDay: _endOfDay,
};

export default DayModule;
