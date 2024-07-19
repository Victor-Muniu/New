import { Reservation } from "../reservation/Reservation";
import { RoomService } from "../roomService/RoomService";
import { CheckIn } from "../checkIn/CheckIn";
import { CheckOut } from "../checkOut/CheckOut";
import { GuestService } from "../guestService/GuestService";
import { RoomStatus } from "../roomStatus/RoomStatus";
import { Booking } from "../booking/Booking";
import { MaintenanceRequest } from "../maintenanceRequest/MaintenanceRequest";

export type Room = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  roomNumber: number | null;
  typeField: string | null;
  pricePerNight: number | null;
  availability: boolean | null;
  reservations?: Array<Reservation>;
  roomServices?: Array<RoomService>;
  checkIns?: Array<CheckIn>;
  checkOuts?: Array<CheckOut>;
  guestServices?: Array<GuestService>;
  roomStatuses?: Array<RoomStatus>;
  bookings?: Array<Booking>;
  maintenanceRequests?: Array<MaintenanceRequest>;
};
