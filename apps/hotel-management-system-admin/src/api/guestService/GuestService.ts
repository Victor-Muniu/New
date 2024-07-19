import { Room } from "../room/Room";
import { Customer } from "../customer/Customer";

export type GuestService = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  serviceType: string | null;
  serviceDate: Date | null;
  room?: Room | null;
  customer?: Customer | null;
};
