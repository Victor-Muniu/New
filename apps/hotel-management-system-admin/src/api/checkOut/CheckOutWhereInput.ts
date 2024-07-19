import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CheckOutWhereInput = {
  id?: StringFilter;
  checkOutDate?: DateTimeNullableFilter;
  room?: RoomWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
};
