import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  customerName?: SortOrder;
  customerEmail?: SortOrder;
  roomId?: SortOrder;
};
