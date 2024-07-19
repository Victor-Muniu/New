import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RoomTitle } from "../room/RoomTitle";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="startDate" source="startDate" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="customerName" source="customerName" />
        <TextInput label="customerEmail" source="customerEmail" type="email" />
        <ReferenceInput source="room.id" reference="Room" label="room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
