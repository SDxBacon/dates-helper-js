import dayjs from 'dayjs';
import { _parseTimeInput } from './basic.js';

/**
 * @name formatISO9075
 * @param {*} time
 * @return {string} strTime (yyyy-MM-dd HH:mm:ss)
 * @description 將時間轉換為ISO 9075 (yyyy-MM-dd HH:mm:ss)
 */
export const formatISO9075 = (time) => {
  const pTime = _parseTimeInput(time);
  return dayjs(pTime).format('YYYY-MM-DD HH:mm:ss');
};

/** */
export const DISPLAY_FORMAT = 'YYYY/MM/DD';
