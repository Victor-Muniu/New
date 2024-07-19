import { RestaurantPos as TRestaurantPos } from "../api/restaurantPos/RestaurantPos";

export const RESTAURANTPOS_TITLE_FIELD = "itemName";

export const RestaurantPosTitle = (record: TRestaurantPos): string => {
  return record.itemName?.toString() || String(record.id);
};
