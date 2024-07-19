import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";

export const MaintenanceRequestShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="requestDate" source="requestDate" />
        <TextField label="description" source="description" />
        <TextField label="status" source="status" />
        <ReferenceField label="room" source="room.id" reference="Room">
          <TextField source={ROOM_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
