import { SortOrder } from "../../util/SortOrder";

export type CheckInOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  checkInDate?: SortOrder;
  roomId?: SortOrder;
  customerId?: SortOrder;
};
