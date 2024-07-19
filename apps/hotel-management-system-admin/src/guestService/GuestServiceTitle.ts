import { GuestService as TGuestService } from "../api/guestService/GuestService";

export const GUESTSERVICE_TITLE_FIELD = "serviceType";

export const GuestServiceTitle = (record: TGuestService): string => {
  return record.serviceType?.toString() || String(record.id);
};
