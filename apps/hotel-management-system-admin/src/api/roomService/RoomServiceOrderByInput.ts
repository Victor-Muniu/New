import { SortOrder } from "../../util/SortOrder";

export type RoomServiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  serviceType?: SortOrder;
  price?: SortOrder;
  roomId?: SortOrder;
};
