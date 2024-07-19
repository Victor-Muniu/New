import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type RoomServiceCreateInput = {
  serviceType?: string | null;
  price?: number | null;
  room?: RoomWhereUniqueInput | null;
};
