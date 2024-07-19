import { SortOrder } from "../../util/SortOrder";

export type BarPosOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  itemId?: SortOrder;
  itemName?: SortOrder;
  quantity?: SortOrder;
  totalAmount?: SortOrder;
  price?: SortOrder;
};
