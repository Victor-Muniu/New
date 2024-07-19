import { Room } from "../room/Room";
import { Customer } from "../customer/Customer";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  bookingDate: Date | null;
  room?: Room | null;
  customer?: Customer | null;
};
