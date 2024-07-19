import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CheckInUpdateInput = {
  checkInDate?: Date | null;
  room?: RoomWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
};
