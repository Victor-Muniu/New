import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CheckInListRelationFilter } from "../checkIn/CheckInListRelationFilter";
import { CheckOutListRelationFilter } from "../checkOut/CheckOutListRelationFilter";
import { GuestServiceListRelationFilter } from "../guestService/GuestServiceListRelationFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  checkIns?: CheckInListRelationFilter;
  checkOuts?: CheckOutListRelationFilter;
  guestServices?: GuestServiceListRelationFilter;
  invoices?: InvoiceListRelationFilter;
  bookings?: BookingListRelationFilter;
};
