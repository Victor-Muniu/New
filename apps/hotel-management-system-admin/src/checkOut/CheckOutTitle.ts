import { CheckOut as TCheckOut } from "../api/checkOut/CheckOut";

export const CHECKOUT_TITLE_FIELD = "id";

export const CheckOutTitle = (record: TCheckOut): string => {
  return record.id?.toString() || String(record.id);
};
