import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type InvoiceWhereInput = {
  id?: StringFilter;
  invoiceDate?: DateTimeNullableFilter;
  totalAmount?: FloatNullableFilter;
  details?: JsonFilter;
  customer?: CustomerWhereUniqueInput;
};
