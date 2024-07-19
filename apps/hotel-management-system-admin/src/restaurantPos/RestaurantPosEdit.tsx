import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RestaurantPosEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="itemId" source="itemId" />
        <TextInput label="itemName" source="itemName" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="totalAmount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};
