import { InputJsonValue } from "../../types";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type InvoiceUpdateInput = {
  invoiceDate?: Date | null;
  totalAmount?: number | null;
  details?: InputJsonValue;
  customer?: CustomerWhereUniqueInput | null;
};
