import { GuestServiceWhereInput } from "./GuestServiceWhereInput";
import { GuestServiceOrderByInput } from "./GuestServiceOrderByInput";

export type GuestServiceFindManyArgs = {
  where?: GuestServiceWhereInput;
  orderBy?: Array<GuestServiceOrderByInput>;
  skip?: number;
  take?: number;
};
