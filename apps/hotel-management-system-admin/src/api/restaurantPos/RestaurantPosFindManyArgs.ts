import { RestaurantPosWhereInput } from "./RestaurantPosWhereInput";
import { RestaurantPosOrderByInput } from "./RestaurantPosOrderByInput";

export type RestaurantPosFindManyArgs = {
  where?: RestaurantPosWhereInput;
  orderBy?: Array<RestaurantPosOrderByInput>;
  skip?: number;
  take?: number;
};
