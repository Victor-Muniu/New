import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="chartOfAccount" source="chartOfAccount" />
        <TextField label="generalLedger" source="generalLedger" />
        <TextField label="purchases" source="purchases" />
        <TextField label="bankStatements" source="bankStatements" />
        <TextField label="expenses" source="expenses" />
        <TextField label="balanceSheet" source="balanceSheet" />
        <TextField label="incomeStatement" source="incomeStatement" />
        <TextField label="trialBalance" source="trialBalance" />
      </SimpleShowLayout>
    </Show>
  );
};
