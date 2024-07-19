import { CheckOutWhereInput } from "./CheckOutWhereInput";
import { CheckOutOrderByInput } from "./CheckOutOrderByInput";

export type CheckOutFindManyArgs = {
  where?: CheckOutWhereInput;
  orderBy?: Array<CheckOutOrderByInput>;
  skip?: number;
  take?: number;
};
