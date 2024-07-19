import { CurioShopPosWhereInput } from "./CurioShopPosWhereInput";
import { CurioShopPosOrderByInput } from "./CurioShopPosOrderByInput";

export type CurioShopPosFindManyArgs = {
  where?: CurioShopPosWhereInput;
  orderBy?: Array<CurioShopPosOrderByInput>;
  skip?: number;
  take?: number;
};
