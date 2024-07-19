import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type RoomStatusUpdateInput = {
  status?: "Option1" | null;
  room?: RoomWhereUniqueInput | null;
};
