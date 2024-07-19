import { ReservationCreateNestedManyWithoutRoomsInput } from "./ReservationCreateNestedManyWithoutRoomsInput";
import { RoomServiceCreateNestedManyWithoutRoomsInput } from "./RoomServiceCreateNestedManyWithoutRoomsInput";
import { CheckInCreateNestedManyWithoutRoomsInput } from "./CheckInCreateNestedManyWithoutRoomsInput";
import { CheckOutCreateNestedManyWithoutRoomsInput } from "./CheckOutCreateNestedManyWithoutRoomsInput";
import { GuestServiceCreateNestedManyWithoutRoomsInput } from "./GuestServiceCreateNestedManyWithoutRoomsInput";
import { RoomStatusCreateNestedManyWithoutRoomsInput } from "./RoomStatusCreateNestedManyWithoutRoomsInput";
import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";
import { MaintenanceRequestCreateNestedManyWithoutRoomsInput } from "./MaintenanceRequestCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  roomNumber?: number | null;
  typeField?: string | null;
  pricePerNight?: number | null;
  availability?: boolean | null;
  reservations?: ReservationCreateNestedManyWithoutRoomsInput;
  roomServices?: RoomServiceCreateNestedManyWithoutRoomsInput;
  checkIns?: CheckInCreateNestedManyWithoutRoomsInput;
  checkOuts?: CheckOutCreateNestedManyWithoutRoomsInput;
  guestServices?: GuestServiceCreateNestedManyWithoutRoomsInput;
  roomStatuses?: RoomStatusCreateNestedManyWithoutRoomsInput;
  bookings?: BookingCreateNestedManyWithoutRoomsInput;
  maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutRoomsInput;
};
