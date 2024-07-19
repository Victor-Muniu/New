import { SortOrder } from "../../util/SortOrder";

export type GuestServiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  serviceType?: SortOrder;
  serviceDate?: SortOrder;
  roomId?: SortOrder;
  customerId?: SortOrder;
};
