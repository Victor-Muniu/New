import { Room } from "../room/Room";

export type MaintenanceRequest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  requestDate: Date | null;
  description: string | null;
  status?: "Option1" | null;
  room?: Room | null;
};
