import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type MaintenanceRequestCreateInput = {
  requestDate?: Date | null;
  description?: string | null;
  status?: "Option1" | null;
  room?: RoomWhereUniqueInput | null;
};
