import { Room } from "../room/Room";

export type RoomStatus = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  room?: Room | null;
};
