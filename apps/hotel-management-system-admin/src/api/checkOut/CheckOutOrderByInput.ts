import { SortOrder } from "../../util/SortOrder";

export type CheckOutOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  checkOutDate?: SortOrder;
  roomId?: SortOrder;
  customerId?: SortOrder;
};
