import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type BarPosWhereInput = {
  id?: StringFilter;
  itemId?: IntNullableFilter;
  itemName?: StringNullableFilter;
  quantity?: IntNullableFilter;
  totalAmount?: FloatNullableFilter;
  price?: FloatNullableFilter;
};
