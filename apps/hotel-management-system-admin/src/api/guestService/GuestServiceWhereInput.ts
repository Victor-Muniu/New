import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type GuestServiceWhereInput = {
  id?: StringFilter;
  serviceType?: StringNullableFilter;
  serviceDate?: DateTimeNullableFilter;
  room?: RoomWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
};
