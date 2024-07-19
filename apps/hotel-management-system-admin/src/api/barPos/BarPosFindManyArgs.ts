import { BarPosWhereInput } from "./BarPosWhereInput";
import { BarPosOrderByInput } from "./BarPosOrderByInput";

export type BarPosFindManyArgs = {
  where?: BarPosWhereInput;
  orderBy?: Array<BarPosOrderByInput>;
  skip?: number;
  take?: number;
};
