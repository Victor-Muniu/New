import { Inventory } from "../inventory/Inventory";

export type Store = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  storeItemId: number | null;
  storeItemName: string | null;
  stock: number | null;
  price: number | null;
  inventories?: Array<Inventory>;
};
