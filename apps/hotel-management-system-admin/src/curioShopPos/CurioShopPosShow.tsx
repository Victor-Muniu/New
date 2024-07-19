import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CurioShopPosShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="itemId" source="itemId" />
        <TextField label="itemName" source="itemName" />
        <TextField label="price" source="price" />
        <TextField label="quantity" source="quantity" />
        <TextField label="totalAmount" source="totalAmount" />
      </SimpleShowLayout>
    </Show>
  );
};
