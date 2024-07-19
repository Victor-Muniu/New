import { JsonValue } from "type-fest";
import { Customer } from "../customer/Customer";

export type Invoice = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  invoiceDate: Date | null;
  totalAmount: number | null;
  details: JsonValue;
  customer?: Customer | null;
};
