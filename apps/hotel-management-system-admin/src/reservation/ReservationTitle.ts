import { Reservation as TReservation } from "../api/reservation/Reservation";

export const RESERVATION_TITLE_FIELD = "customerName";

export const ReservationTitle = (record: TReservation): string => {
  return record.customerName?.toString() || String(record.id);
};
