import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type InventoryWhereInput = {
  id?: StringFilter;
  itemName?: StringNullableFilter;
  quantity?: IntNullableFilter;
  store?: StoreWhereUniqueInput;
};
