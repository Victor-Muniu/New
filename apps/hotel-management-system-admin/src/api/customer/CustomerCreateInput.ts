import { CheckInCreateNestedManyWithoutCustomersInput } from "./CheckInCreateNestedManyWithoutCustomersInput";
import { CheckOutCreateNestedManyWithoutCustomersInput } from "./CheckOutCreateNestedManyWithoutCustomersInput";
import { GuestServiceCreateNestedManyWithoutCustomersInput } from "./GuestServiceCreateNestedManyWithoutCustomersInput";
import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";
import { BookingCreateNestedManyWithoutCustomersInput } from "./BookingCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  checkIns?: CheckInCreateNestedManyWithoutCustomersInput;
  checkOuts?: CheckOutCreateNestedManyWithoutCustomersInput;
  guestServices?: GuestServiceCreateNestedManyWithoutCustomersInput;
  invoices?: InvoiceCreateNestedManyWithoutCustomersInput;
  bookings?: BookingCreateNestedManyWithoutCustomersInput;
};
