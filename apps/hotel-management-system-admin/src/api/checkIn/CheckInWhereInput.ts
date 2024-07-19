import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CheckInWhereInput = {
  id?: StringFilter;
  checkInDate?: DateTimeNullableFilter;
  room?: RoomWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
};
