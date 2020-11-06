import { _parseTimeInput } from "./basic.js";
import { formatISO9075 } from "date-fns";

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

/** */
export const DISPLAY_FORMAT = "YYYY/MM/DD";
