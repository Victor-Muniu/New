import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
