import { JsonValue } from "type-fest";

export type Account = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  chartOfAccount: JsonValue;
  generalLedger: JsonValue;
  purchases: JsonValue;
  bankStatements: JsonValue;
  expenses: JsonValue;
  balanceSheet: JsonValue;
  incomeStatement: JsonValue;
  trialBalance: JsonValue;
};
