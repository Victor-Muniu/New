import { Rate as TRate } from "../api/rate/Rate";

export const RATE_TITLE_FIELD = "roomType";

export const RateTitle = (record: TRate): string => {
  return record.roomType?.toString() || String(record.id);
};
