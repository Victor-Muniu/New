import { InventoryCreateNestedManyWithoutStoresInput } from "./InventoryCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  storeItemId?: number | null;
  storeItemName?: string | null;
  stock?: number | null;
  price?: number | null;
  inventories?: InventoryCreateNestedManyWithoutStoresInput;
};
