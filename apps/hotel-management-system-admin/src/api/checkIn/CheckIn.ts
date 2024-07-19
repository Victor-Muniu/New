import { Room } from "../room/Room";
import { Customer } from "../customer/Customer";

export type CheckIn = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  checkInDate: Date | null;
  room?: Room | null;
  customer?: Customer | null;
};
