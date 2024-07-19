import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type InventoryCreateInput = {
  itemName?: string | null;
  quantity?: number | null;
  store?: StoreWhereUniqueInput | null;
};
