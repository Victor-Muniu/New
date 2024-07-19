import { CurioShopPos as TCurioShopPos } from "../api/curioShopPos/CurioShopPos";

export const CURIOSHOPPOS_TITLE_FIELD = "itemName";

export const CurioShopPosTitle = (record: TCurioShopPos): string => {
  return record.itemName?.toString() || String(record.id);
};
