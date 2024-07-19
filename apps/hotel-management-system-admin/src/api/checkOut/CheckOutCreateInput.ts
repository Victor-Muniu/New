import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CheckOutCreateInput = {
  checkOutDate?: Date | null;
  room?: RoomWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
};
