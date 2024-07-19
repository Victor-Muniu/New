import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type RoomServiceWhereInput = {
  id?: StringFilter;
  serviceType?: StringNullableFilter;
  price?: FloatNullableFilter;
  room?: RoomWhereUniqueInput;
};
