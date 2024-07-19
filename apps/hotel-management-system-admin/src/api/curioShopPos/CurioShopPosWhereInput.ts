import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CurioShopPosWhereInput = {
  id?: StringFilter;
  itemId?: IntNullableFilter;
  itemName?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  totalAmount?: FloatNullableFilter;
};
