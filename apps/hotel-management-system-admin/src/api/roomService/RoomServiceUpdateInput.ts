import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type RoomServiceUpdateInput = {
  serviceType?: string | null;
  price?: number | null;
  room?: RoomWhereUniqueInput | null;
};
