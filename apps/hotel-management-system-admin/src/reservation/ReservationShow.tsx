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

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="startDate" source="startDate" />
        <TextField label="endDate" source="endDate" />
        <TextField label="customerName" source="customerName" />
        <TextField label="customerEmail" source="customerEmail" />
        <ReferenceField label="room" source="room.id" reference="Room">
          <TextField source={ROOM_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
