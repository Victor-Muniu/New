import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ReservationCreateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  customerName?: string | null;
  customerEmail?: string | null;
  room?: RoomWhereUniqueInput | null;
};
