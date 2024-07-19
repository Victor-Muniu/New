import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  chartOfAccount?: JsonFilter;
  generalLedger?: JsonFilter;
  purchases?: JsonFilter;
  bankStatements?: JsonFilter;
  expenses?: JsonFilter;
  balanceSheet?: JsonFilter;
  incomeStatement?: JsonFilter;
  trialBalance?: JsonFilter;
};
