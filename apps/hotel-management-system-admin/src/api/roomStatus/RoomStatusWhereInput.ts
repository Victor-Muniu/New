import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type RoomStatusWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  room?: RoomWhereUniqueInput;
};
