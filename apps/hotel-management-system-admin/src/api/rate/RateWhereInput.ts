import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RateWhereInput = {
  id?: StringFilter;
  roomType?: StringNullableFilter;
  price?: FloatNullableFilter;
  season?: "Option1";
};
