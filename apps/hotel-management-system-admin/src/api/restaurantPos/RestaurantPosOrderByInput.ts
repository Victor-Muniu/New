import { SortOrder } from "../../util/SortOrder";

export type RestaurantPosOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  itemId?: SortOrder;
  itemName?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  totalAmount?: SortOrder;
};
