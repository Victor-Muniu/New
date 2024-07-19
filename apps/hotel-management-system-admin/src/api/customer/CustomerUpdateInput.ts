import { CheckInUpdateManyWithoutCustomersInput } from "./CheckInUpdateManyWithoutCustomersInput";
import { CheckOutUpdateManyWithoutCustomersInput } from "./CheckOutUpdateManyWithoutCustomersInput";
import { GuestServiceUpdateManyWithoutCustomersInput } from "./GuestServiceUpdateManyWithoutCustomersInput";
import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";
import { BookingUpdateManyWithoutCustomersInput } from "./BookingUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  checkIns?: CheckInUpdateManyWithoutCustomersInput;
  checkOuts?: CheckOutUpdateManyWithoutCustomersInput;
  guestServices?: GuestServiceUpdateManyWithoutCustomersInput;
  invoices?: InvoiceUpdateManyWithoutCustomersInput;
  bookings?: BookingUpdateManyWithoutCustomersInput;
};
