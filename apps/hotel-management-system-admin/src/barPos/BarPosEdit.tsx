import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const BarPosEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="itemId" source="itemId" />
        <TextInput label="itemName" source="itemName" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="totalAmount" source="totalAmount" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
