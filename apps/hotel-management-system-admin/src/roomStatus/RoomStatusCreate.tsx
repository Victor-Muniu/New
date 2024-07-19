import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { RoomTitle } from "../room/RoomTitle";

export const RoomStatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="room.id" reference="Room" label="room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
