import { Room } from "../room/Room";

export type Reservation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date | null;
  endDate: Date | null;
  customerName: string | null;
  customerEmail: string | null;
  room?: Room | null;
};
