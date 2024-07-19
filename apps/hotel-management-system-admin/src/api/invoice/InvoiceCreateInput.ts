import { InputJsonValue } from "../../types";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type InvoiceCreateInput = {
  invoiceDate?: Date | null;
  totalAmount?: number | null;
  details?: InputJsonValue;
  customer?: CustomerWhereUniqueInput | null;
};
