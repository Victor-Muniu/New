import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  itemName?: SortOrder;
  quantity?: SortOrder;
  storeId?: SortOrder;
};
