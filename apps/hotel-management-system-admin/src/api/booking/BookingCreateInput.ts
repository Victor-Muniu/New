import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type BookingCreateInput = {
  status?: "Option1" | null;
  bookingDate?: Date | null;
  room?: RoomWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
};
