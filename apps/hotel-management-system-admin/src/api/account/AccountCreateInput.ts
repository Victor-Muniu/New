import { InputJsonValue } from "../../types";

export type AccountCreateInput = {
  chartOfAccount?: InputJsonValue;
  generalLedger?: InputJsonValue;
  purchases?: InputJsonValue;
  bankStatements?: InputJsonValue;
  expenses?: InputJsonValue;
  balanceSheet?: InputJsonValue;
  incomeStatement?: InputJsonValue;
  trialBalance?: InputJsonValue;
};
