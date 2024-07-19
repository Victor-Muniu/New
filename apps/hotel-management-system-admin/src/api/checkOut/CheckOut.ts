import { Room } from "../room/Room";
import { Customer } from "../customer/Customer";

export type CheckOut = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  checkOutDate: Date | null;
  room?: Room | null;
  customer?: Customer | null;
};
