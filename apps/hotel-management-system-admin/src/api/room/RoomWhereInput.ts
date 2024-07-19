import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { RoomServiceListRelationFilter } from "../roomService/RoomServiceListRelationFilter";
import { CheckInListRelationFilter } from "../checkIn/CheckInListRelationFilter";
import { CheckOutListRelationFilter } from "../checkOut/CheckOutListRelationFilter";
import { GuestServiceListRelationFilter } from "../guestService/GuestServiceListRelationFilter";
import { RoomStatusListRelationFilter } from "../roomStatus/RoomStatusListRelationFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { MaintenanceRequestListRelationFilter } from "../maintenanceRequest/MaintenanceRequestListRelationFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  roomNumber?: IntNullableFilter;
  typeField?: StringNullableFilter;
  pricePerNight?: FloatNullableFilter;
  availability?: BooleanNullableFilter;
  reservations?: ReservationListRelationFilter;
  roomServices?: RoomServiceListRelationFilter;
  checkIns?: CheckInListRelationFilter;
  checkOuts?: CheckOutListRelationFilter;
  guestServices?: GuestServiceListRelationFilter;
  roomStatuses?: RoomStatusListRelationFilter;
  bookings?: BookingListRelationFilter;
  maintenanceRequests?: MaintenanceRequestListRelationFilter;
};
