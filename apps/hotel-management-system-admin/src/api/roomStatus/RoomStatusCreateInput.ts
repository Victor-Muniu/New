import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type RoomStatusCreateInput = {
  status?: "Option1" | null;
  room?: RoomWhereUniqueInput | null;
};
