import { Room } from "../room/Room";

export type RoomService = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  serviceType: string | null;
  price: number | null;
  room?: Room | null;
};
