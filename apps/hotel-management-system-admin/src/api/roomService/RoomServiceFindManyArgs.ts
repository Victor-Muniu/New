import { RoomServiceWhereInput } from "./RoomServiceWhereInput";
import { RoomServiceOrderByInput } from "./RoomServiceOrderByInput";

export type RoomServiceFindManyArgs = {
  where?: RoomServiceWhereInput;
  orderBy?: Array<RoomServiceOrderByInput>;
  skip?: number;
  take?: number;
};
