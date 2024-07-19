import { ReservationUpdateManyWithoutRoomsInput } from "./ReservationUpdateManyWithoutRoomsInput";
import { RoomServiceUpdateManyWithoutRoomsInput } from "./RoomServiceUpdateManyWithoutRoomsInput";
import { CheckInUpdateManyWithoutRoomsInput } from "./CheckInUpdateManyWithoutRoomsInput";
import { CheckOutUpdateManyWithoutRoomsInput } from "./CheckOutUpdateManyWithoutRoomsInput";
import { GuestServiceUpdateManyWithoutRoomsInput } from "./GuestServiceUpdateManyWithoutRoomsInput";
import { RoomStatusUpdateManyWithoutRoomsInput } from "./RoomStatusUpdateManyWithoutRoomsInput";
import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";
import { MaintenanceRequestUpdateManyWithoutRoomsInput } from "./MaintenanceRequestUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  roomNumber?: number | null;
  typeField?: string | null;
  pricePerNight?: number | null;
  availability?: boolean | null;
  reservations?: ReservationUpdateManyWithoutRoomsInput;
  roomServices?: RoomServiceUpdateManyWithoutRoomsInput;
  checkIns?: CheckInUpdateManyWithoutRoomsInput;
  checkOuts?: CheckOutUpdateManyWithoutRoomsInput;
  guestServices?: GuestServiceUpdateManyWithoutRoomsInput;
  roomStatuses?: RoomStatusUpdateManyWithoutRoomsInput;
  bookings?: BookingUpdateManyWithoutRoomsInput;
  maintenanceRequests?: MaintenanceRequestUpdateManyWithoutRoomsInput;
};
