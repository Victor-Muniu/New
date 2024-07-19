import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  bookingDate?: DateTimeNullableFilter;
  room?: RoomWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
};
