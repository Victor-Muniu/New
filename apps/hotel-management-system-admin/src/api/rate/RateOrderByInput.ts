import { SortOrder } from "../../util/SortOrder";

export type RateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  roomType?: SortOrder;
  price?: SortOrder;
  season?: SortOrder;
};
