import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  invoiceDate?: SortOrder;
  totalAmount?: SortOrder;
  details?: SortOrder;
  customerId?: SortOrder;
};
