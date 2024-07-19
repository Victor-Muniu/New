import { BarPos as TBarPos } from "../api/barPos/BarPos";

export const BARPOS_TITLE_FIELD = "itemName";

export const BarPosTitle = (record: TBarPos): string => {
  return record.itemName?.toString() || String(record.id);
};
