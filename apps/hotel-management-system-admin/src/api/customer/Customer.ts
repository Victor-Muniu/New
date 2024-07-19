import { CheckIn } from "../checkIn/CheckIn";
import { CheckOut } from "../checkOut/CheckOut";
import { GuestService } from "../guestService/GuestService";
import { Invoice } from "../invoice/Invoice";
import { Booking } from "../booking/Booking";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  checkIns?: Array<CheckIn>;
  checkOuts?: Array<CheckOut>;
  guestServices?: Array<GuestService>;
  invoices?: Array<Invoice>;
  bookings?: Array<Booking>;
};
