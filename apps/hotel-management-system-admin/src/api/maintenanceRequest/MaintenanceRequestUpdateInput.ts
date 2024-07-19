import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type MaintenanceRequestUpdateInput = {
  requestDate?: Date | null;
  description?: string | null;
  status?: "Option1" | null;
  room?: RoomWhereUniqueInput | null;
};
