import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type InventoryUpdateInput = {
  itemName?: string | null;
  quantity?: number | null;
  store?: StoreWhereUniqueInput | null;
};
