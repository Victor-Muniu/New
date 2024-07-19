import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  chartOfAccount?: SortOrder;
  generalLedger?: SortOrder;
  purchases?: SortOrder;
  bankStatements?: SortOrder;
  expenses?: SortOrder;
  balanceSheet?: SortOrder;
  incomeStatement?: SortOrder;
  trialBalance?: SortOrder;
};
