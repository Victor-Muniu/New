import { CheckIn as TCheckIn } from "../api/checkIn/CheckIn";

export const CHECKIN_TITLE_FIELD = "id";

export const CheckInTitle = (record: TCheckIn): string => {
  return record.id?.toString() || String(record.id);
};
