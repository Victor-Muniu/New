import { Store } from "../store/Store";

export type Inventory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  itemName: string | null;
  quantity: number | null;
  store?: Store | null;
};
