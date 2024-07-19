import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BarPosList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BarPOSItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="itemId" source="itemId" />
        <TextField label="itemName" source="itemName" />
        <TextField label="quantity" source="quantity" />
        <TextField label="totalAmount" source="totalAmount" />
        <TextField label="price" source="price" />
      </Datagrid>
    </List>
  );
};
