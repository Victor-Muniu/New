import { InventoryUpdateManyWithoutStoresInput } from "./InventoryUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  storeItemId?: number | null;
  storeItemName?: string | null;
  stock?: number | null;
  price?: number | null;
  inventories?: InventoryUpdateManyWithoutStoresInput;
};
