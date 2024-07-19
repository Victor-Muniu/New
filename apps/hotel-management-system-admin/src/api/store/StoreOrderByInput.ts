import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  storeItemId?: SortOrder;
  storeItemName?: SortOrder;
  stock?: SortOrder;
  price?: SortOrder;
};
