import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type MaintenanceRequestWhereInput = {
  id?: StringFilter;
  requestDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  room?: RoomWhereUniqueInput;
};
