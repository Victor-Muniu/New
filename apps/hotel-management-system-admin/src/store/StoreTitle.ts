import { Store as TStore } from "../api/store/Store";

export const STORE_TITLE_FIELD = "storeItemName";

export const StoreTitle = (record: TStore): string => {
  return record.storeItemName?.toString() || String(record.id);
};
